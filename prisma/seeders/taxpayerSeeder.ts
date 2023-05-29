import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const taxpayerSeeder = async () => {
  const taxpayer1 = await prisma.taxpayer.create({
    data: {
      id: 1,
      rfc: "PERJ901231ABC",
      name: "Juan Pérez",
      address: "Calle 123, Ciudad de México",
    },
  });

  const taxpayer2 = await prisma.taxpayer.create({
    data: {
      id: 2,
      rfc: "LOAM890502DEF",
      name: "María López",
      address: "Avenida Principal 456, Guadalajara",
    },
  });

  const taxpayer3 = await prisma.taxpayer.create({
    data: {
      id: 3,
      rfc: "RAMA950703JKL",
      name: "Ana Ramírez",
      address: "Calle Central 789, Monterrey",
    },
  });
};
