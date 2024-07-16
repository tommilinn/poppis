import { PrismaClient } from "@prisma/client";
import { IUser } from "../types";
import prisma from "../prisma";

const client = prisma;

export const getUserById = async (id: string) => {
  return await client.profile.findUnique({ where: { id } });
};
