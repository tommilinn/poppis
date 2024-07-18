"use client";

import useProfiles from "@/lib/hooks/useProfiles";
import { usePoppis } from "@/lib/context/poppisContext";

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
