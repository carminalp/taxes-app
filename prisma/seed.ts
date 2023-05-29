import { PrismaClient } from "@prisma/client";
import { taxpayerSeeder } from "./seeders/taxpayerSeeder";

const prisma = new PrismaClient();

async function main() {
  await taxpayerSeeder();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
