import { PrismaClient } from "@prisma/client";
import { IUser } from "../types";

const prismaClient = new PrismaClient();

export const getUserByUsername = (username: string): IUser => {
    // Replace with your actual database query
    return {
        username,
        password: "password_hash", // Replace with your actual password hash
        displayName: "John Doe", // Replace with your actual display name
    }
};