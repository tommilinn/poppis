import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

const client = prisma;

export const GET = async () => {
  const categories = await client.categoryType.findMany({});;

  if (!categories) {
    throw new Error(`Error fetching achievements`);
  }

  return NextResponse.json( categories );
};
