import { useQuery } from "@tanstack/react-query";
import { IAchievementCategory } from "../types";

const fetchAchievementCategories = async (includeAchievements?: boolean) => {
  const queryParam = includeAchievements ? "?includeAchievements=true" : "";
  const response = await fetch(`/api/achievements/categories${queryParam}`);
  return (await response.json()) as IAchievementCategory[];
};

const useAchievementCategories = (includeAchievements?: boolean) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["achievementCategories", includeAchievements],
    queryFn: async () => fetchAchievementCategories(includeAchievements),
  });
  
  return { categories: data ?? [], isLoading, isError };
};

export default useAchievementCategories;