import * as bcrypt from "bcrypt";
import prisma from "../prisma";

const client = prisma;

export const createUserWithAuth = async (
  username: string,
  displayName: string,
  password: string
): Promise<string> => {
  password = await bcrypt.hash(password, 10);


  const auth = await client.profile.create({
    data: {
      username,
      displayName,
      auth: {
        create: {
          password,
        },
      },
    },
  });
  return auth.id;
};
