// seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.categoryType.createMany({
    data: [
      { name: "Heitot" },
      { name: "Kisat" },
      { name: "Pelimuodot" },
      { name: "Kekeily" },
    ],
  });

  // Create Achievement Groups
  await prisma.achievementGroup.createMany({
    data: [
      {
        name: "Henkkari",
        description:
          "Mikä tahansa kyykkäliiton hyväksymä henkilökohtainen kilpailu",
      },
    ],
  });

  // Create Achievement Types
  await prisma.achievementType.create({
    data: {
      name: "4H kalareissu",
      points: 5,
      description: "Heitä kisoissa 4 haukea putkeen.",
      category: { connect: { name: "Kekeily" } },
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Pulukone",
      points: 2,
      description:
        "Heitä puhdas pulu. Tämä tarkoittaa kolmea tornia puhtaasti, niin, että jäljelle jää yksittäiset tolpat eikä roskia.",
      category: { connect: { name: "Heitot" } },
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Boittaja!",
      points: 2,
      description: "Tule ensimmäiseksi B-sarjan henkilökohtaisessa kilpailussa",
      category: { connect: { name: "Kisat" } },
      group: { connect: { name: "Henkkari" } },
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Parasta A-luokkaa!",
      points: 4,
      description: "Tule ensimmäiseksi A-sarjan henkilökohtaisessa kilpailussa",
      category: { connect: { name: "Kisat" } },
      group: { connect: { name: "Henkkari" } },
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Menestys!",
      points: 7,
      description:
        "Tule ensimmäiseksi Mestaruus-sarjan henkilökohtaisessa kilpailussa",
      category: { connect: { name: "Kisat" } },
      group: { connect: { name: "Henkkari" } },
    },
  });

  console.log("Seeding completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
