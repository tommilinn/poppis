import prisma from "../../../../lib/prisma";

const client = prisma;

export const getProfileById = async (id: string) => {
  return await client.profile.findUnique({
    where: { id },
    select: { displayName: true, username: true },
  });
};
