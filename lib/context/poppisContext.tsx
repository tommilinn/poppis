"use client";

import { IUser } from "@/app/api/types";
import useLogin from "@/components/login/useLogin";
import useProfileDetails from "@/lib/hooks/useProfileDetails";
import { createContext, useContext, ReactNode, useEffect } from "react";

interface PoppisContextType {
  setProfileId?: (id: string | undefined) => void;
  profileDetails: IUser | undefined;
  isLoggedIn: boolean;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { profileDetails, setProfileId, isLoggedIn } = useProfileDetails();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/auth/login/token", {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const userId = await response.json();
          setProfileId(userId);
        } else {
          console.error("Failed to authenticate");
        }
      } catch (error) {
        console.error("Error during authentication check", error);
      }
    };

    checkAuthentication();
  }, [setProfileId]);

  return (
    <PoppisContext.Provider
      value={{ setProfileId, profileDetails: profileDetails ?? undefined, isLoggedIn }}
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
