import prisma from "../../../lib/prisma";

const client = prisma;

export const getAllUsers = async () =>
  await client.profile.findMany({
    select: { username: true, displayName: true },
  });
