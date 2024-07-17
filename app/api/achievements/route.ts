import { NextResponse } from "next/server"
import { getAchievements } from "./getAchievements"

export const GET = async () => {
    const result = await getAchievements();
    console.log(result.map(x => x.name))
    return NextResponse.json(result);
}