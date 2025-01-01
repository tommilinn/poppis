import { IAchievement } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const fetchAchievements = async () => {
  const response = await fetch("/api/achievements");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data === null || typeof data !== "object") {
    throw new TypeError(
      'The "payload" argument must be of type object. Received null'
    );
  }
  return data as IAchievement[];
};

const useAchievements = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => fetchAchievements(),
  });

  return { achievements: data ?? [], isLoading };
};

export default useAchievements;
