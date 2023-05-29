import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Manejo de errores
  try {
    const taxpayers = await prisma.taxpayer.findMany({
      select: {
        id: true,
        rfc: true,
        name: true,
        address: true,
      },
    });
    res.status(200).json(taxpayers);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured." });
  }
};
