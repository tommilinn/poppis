"use client";

import useAllProfiles from "@/lib/hooks/useAllUserDetails";
import { usePoppis } from "@/lib/poppisContext";

export default function Scoreboard() {
  const { profileDetails } = usePoppis();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {profileDetails && (
          <ol>
            {`You are logged in as: ${profileDetails.displayName}`}
          </ol>
        )}
    </main>
  );
}
