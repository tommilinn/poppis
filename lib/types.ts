export interface IAchievement {
    id: number;
    name: string;
    points: number;
    categoryId: number;
    description?: string;
    groupId?: number;
}

export interface IAchievementCategory {
  id: number;
  name: string;
  description?: string;
  achievementTypes: IAchievement[];
}
