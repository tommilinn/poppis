import { useQuery } from "@tanstack/react-query";

interface IAchievementCategory {
  id: number;
  name: string;
  description?: string;
}

const fetchAchievementCategories = async () => {
  const response = await fetch("/api/achievements/categories");
  return (await response.json()) as IAchievementCategory[];
};

const useAchievementCategories = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["achievementCategories"],
    queryFn: async () => fetchAchievementCategories(),
  });
  
  return { categories: data ?? [], isLoading, isError };
};

export default useAchievementCategories;