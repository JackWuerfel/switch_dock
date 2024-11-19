import MockDataSeed from "./mock-seed";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: "ADMIN",
    },
  });

  await prisma.benefit.createMany({
    data: MockDataSeed,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
