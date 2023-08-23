import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { TokenUtils } from "./utils";
import { ISigninBody, getBodyErrorSignin } from "./validations";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body: ISigninBody = req.body;
    const bodyError = getBodyErrorSignin(body);

    if (bodyError) {
      return res
        .status(bodyError.statusCode)
        .json({ error: bodyError.errorMessage });
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });

    if (!user) {
      return res.status(401).json({ error: "User or password is invalid" });
    }

    const passwordMatch = bcrypt.compareSync(body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "User or password is invalid" });
    }

    try {
      const auth = await TokenUtils.genAuthTokens({
        sub: user.id.toString(),
        email: user.email,
      });

      return res.status(200).json({ auth });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  return res.status(404).json(`${req.method} - ${req.url} not found`);
}
