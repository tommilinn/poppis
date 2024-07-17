// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare let global: { prisma: PrismaClient | undefined };

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Ensure the PrismaClient is not recreated in development
  // This is for Next.js hot reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;