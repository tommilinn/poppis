/*
 * Types for Achievement System
 * 
 * - Achievement: A thing you can earn that gives you points
 * - Category: A group for achievements
 * - Achievement Group: A sequence of achievements that get 
 *   progressively harder and earn more points
 */


export interface IAchievement {
    id: number;
    name: string;
    points: number;
    categoryId: number;
    description: string | null;
    groupId: number  | null;
}

export interface IAchievementCategory {
  id: number;
  name: string;
  description: string  | null;
  achievementTypes: IAchievement[] | null;
}
