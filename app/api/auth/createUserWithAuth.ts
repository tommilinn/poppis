import prisma from "../prisma";

const client = prisma;

export const createUserWithAuth = async (
  username: string,
  displayName: string,
  password: string
) => {
  const auth = await client.auth.create({
    data: {
      password,
      user: {
        create: {
          username,
          displayName,
        },
      },
    },
  });
};
