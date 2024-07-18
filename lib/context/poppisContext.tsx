"use client";

import { IUser } from "@/app/api/types";
import useProfileDetails from "@/lib/hooks/useProfileDetails";
import { createContext, useContext, ReactNode, useEffect } from "react";

interface PoppisContextType {
  setProfileId?: (id: string | undefined) => void;
  profileDetails: IUser | undefined;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { profileDetails, setProfileId } = useProfileDetails();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("Authorization="))
          ?.split("=")[1];
          console.log(token);
        if (token?.startsWith("Bearer ")) {
          console.log("haloo")
          const response = await fetch("/api/authentication/login/token", {
            method: "GET",
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            // setProfileId(data.userId);
          } else {
            console.error("Failed to authenticate");
          }
        }
      } catch (error) {
        console.error("Error during authentication check", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <PoppisContext.Provider
      value={{ setProfileId, profileDetails: profileDetails ?? undefined }}
    >
      {children}
    </PoppisContext.Provider>
  );
};

export const usePoppis = (): PoppisContextType => {
  const context = useContext(PoppisContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
