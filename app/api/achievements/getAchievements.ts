import prisma from "../../../lib/prisma";

const client = prisma;

export const getAchievements = async () => {
  try {
    const achievements = await client.achievementType.findMany({});

    if (!achievements || achievements.length === 0) {
      throw new Error(`No achievements found`);
    }

    return achievements;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching achievements: ${error.message}`);
    }
    throw new Error(`Error fetching achievements`);
  }
};
