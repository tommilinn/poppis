import { NextResponse } from "next/server";
import { getAchievements } from "./getAchievements";

export const GET = async () => {
  const result = await getAchievements();
  return NextResponse.json(result);
};
