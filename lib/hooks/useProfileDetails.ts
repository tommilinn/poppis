import { IUser } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken"; // Import the jsonwebtoken library
import { cookies } from "next/headers";


interface MyJwtPayload extends JwtPayload {
  userId: string;
}

const fetchProfileDetails = async (
  userId: string | undefined
): Promise<IUser> => {
  if (!userId) throw Error("User ID is required");
  const response = await fetch(`/api/profile/${userId}`);
  return await response.json();
};

const useProfileDetails = () => {
  const [profileId, setProfileId] = useState<string | undefined>(undefined);
  const [profileDetails, setProfileDetails] = useState<IUser | undefined>(
    undefined
  );


  const result = useQuery<IUser, Error>({
    queryKey: ["profileDetails", profileId],
    queryFn: () => fetchProfileDetails(profileId),
    enabled: !!profileId,
  });

  useEffect(() => {
    if (profileDetails && profileId === undefined) {
      setProfileDetails(undefined);
    }
  }, [profileId, profileDetails]);

  useEffect(() => {
    if (result.isSuccess && result.data) {
      setProfileDetails(result.data);
    }
  }, [result.isSuccess, result.data]);
  
  const isLoggedIn = !!profileDetails;

  return { profileDetails, setProfileId, isLoggedIn };
};
export default useProfileDetails;
