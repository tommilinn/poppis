import prisma from "../prisma";

const client = prisma;

export const getAuthWithUsername = async (username: string) => {
  return await client.profile.findUnique({ where: { username }, include: {
    auth: true,
  } });
};
