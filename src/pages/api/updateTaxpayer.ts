import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { id, rfc, name, address } = req.body;
    try {
      const post = await prisma.taxpayer.update({
        where: {
          id,
        },
        data: {
          rfc,
          name,
          address,
        },
      });
      res.status(200).json(post);
    } catch (error) {
      res
        .status(403)
        .json({ err: "Error occured while adding a taxpayer item." });
    }
  }
};
