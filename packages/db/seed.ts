import { PrismaClient } from "../src/index.ts ";

async function seed() {
  const prisma = new PrismaClient();

  await prisma.website.create({
    data: {
      id: "1",
      url: "https://example.com",
    },
  });

  await prisma.website.create({
    data: {
      id: "1",
      url: "https://example.com",
    },
  });

  await prisma.tick.create({
    data: {
      id: "1",
      websiteId: "1",
      validatorId: "1",
      createdAt: new Date(),
      status: "Good",
      latency: 100,
    },
  });

  await prisma.tick.create({
    data: {
      id: "1",
      websiteId: "1",
      validatorId: "1",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      status: "Good",
      latency: 100,
    },
  });

  await prisma..create({
    data: {
      id: "1",
      websiteId: "1",
      validatorId: "1",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      status: "bad",
      latency: 100,
    },
  });
}

seed();
