import prisma from "../../../lib/prisma";

const client = prisma;

export const getAchievements = async () => {
  const achievements = client.achievementType.findMany({});;

  if (!achievements) {
    throw new Error(`Error fetching achievements`);
  }

  return achievements;
};
