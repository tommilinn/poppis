// seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Achievement Types
  await prisma.achievementType.create({
    data: {
      name: "4H kalareissu",
      Points: 5,
      description: "Heitä kisoissa 4 haukea putkeen.",
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Pulukone",
      Points: 2,
      description:
        "Heitä puhdas pulu. Tämä tarkoittaa kolmea tornia puhtaasti, niin, että jäljelle jää yksittäiset tolpat eikä roskia.",
    },
  });
  await prisma.achievementType.create({
    data: {
      name: "Boittaja!",
      Points: 2,
      description: "Tule ensimmäiseksi B-sarjan henkilökohtaisessa kilpailussa",
      group: "Henkilökohtaiset-kilpailut",
    },
  });
  await prisma.achievementType.create({
    data: {
      name: "Parasta A-luokkaa!",
      Points: 4,
      description: "Tule ensimmäiseksi A-sarjan henkilökohtaisessa kilpailussa",
      group: "Henkilökohtaiset-kilpailut",
    },
  });

  await prisma.achievementType.create({
    data: {
      name: "Menestys!",
      Points: 7,
      description: "Tule ensimmäiseksi Mestaruus-sarjan henkilökohtaisessa kilpailussa",
      group: "Henkilökohtaiset-kilpailut",
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
