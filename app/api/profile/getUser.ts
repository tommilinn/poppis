import prisma from "../../../lib/prisma";

const client = prisma;

export const getUserById = async (id: string) => {
  return await client.profile.findUnique({ where: { id } });
};
