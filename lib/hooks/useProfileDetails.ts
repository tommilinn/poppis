import { IUser } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";

const fetchProfileDetails = async (
  userId: string | undefined
): Promise<IUser | null> => {
  if (!userId) return null;
  const response = await fetch(`/api/users/${userId}`);
  return await response.json();
};

const useProfileDetails = (userId: string | undefined) =>
  useQuery({
    queryKey: ["userDetails"],
    queryFn: () => fetchProfileDetails(userId),
  });

export default useProfileDetails;
