import prisma from "../../../../lib/prisma";

const client = prisma;

export const getProfileById = async (id: string) => {
  return await client.profile.findUnique({
    where: { id },
    select: { id: true, displayName: true, username: true },
  });
};
