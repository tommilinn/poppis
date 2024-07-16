import prisma from "../../prisma";

const client = prisma;

export const getAuthWithUsername = async (username: string) => {
  const profile = await client.profile.findFirst({
    where: { username },
    include: {
      auth: true,
    },
  });

  if (!profile) {
    throw new Error(`Profile with username ${username} not found`);
  }

  return profile;
};
