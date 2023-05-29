import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { rfc, name, address } = req.body;
    const post = await prisma.taxpayer.create({
      data: {
        rfc,
        name,
        address,
      },
    });
    res.status(200).json(post);
  }
};
