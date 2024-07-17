"use client";

import Spinner from "@/components/ui/spinner";
import useProfiles from "@/lib/hooks/useProfiles";
export default function Scoreboard() {
  const { profiles, isLoading } = useProfiles();

  if (isLoading) {
    return <Spinner middle />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ol>
        {profiles.map((x, index) => {
          return <li key={index}>{x.username}</li>;
        })}
      </ol>
    </main>
  );
}
