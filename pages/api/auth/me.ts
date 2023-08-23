import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { TokenUtils } from "./utils";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const email = (req.headers["x-user-email"] ?? "") as string;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(204);
    }

    // @ts-ignore-next-line
    delete user?.password;

    return res.status(200).json(user);
  }

  return res.status(404).json(`${req.method} - ${req.url} not found`);
}
