import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const deleteTaxpayer = await prisma.taxpayer.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deleteTaxpayer);
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a food item." });
  }
};