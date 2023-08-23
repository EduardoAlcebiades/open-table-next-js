import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { TokenUtils } from "./utils";
import { ISignupBody, getBodyErrorSignup } from "./validations";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body: ISignupBody = req.body;
    const bodyError = getBodyErrorSignup(body);

    if (bodyError) {
      return res
        .status(bodyError.statusCode)
        .json({ error: bodyError.errorMessage });
    }

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (userAlreadyExists) {
      return res
        .status(409)
        .json({ error: "Email is associated already with an account" });
    }

    const hashedPassword = bcrypt.hashSync(body.password!, 10);

    const user = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });

    // @ts-ignore-next-line
    delete user.password;

    const auth = await TokenUtils.genAuthTokens({
      sub: user.id.toString(),
      email: user.email,
    });

    return res.status(200).json({ user, auth });
  }

  return res.status(404).json(`${req.method} - ${req.url} not found`);
}
