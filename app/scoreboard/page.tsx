"use client";

import useLogin from "@/components/login/useLogin";
import { Button } from "@/components/ui/button";
import useAllProfiles from "@/lib/hooks/useAllUserDetails";
import { useEffect, useState } from "react";

interface IScoreboard {
  list: { name: string };
}

export default function Scoreboard() {
  const { data } = useAllProfiles();
  const { mutate } = useLogin(); // Use the useLogin hook
  const debug = () => {
    mutate({ username: "username", password: "password" });
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={debug}>DEBUG</Button>
      <ol>
        {data
          ? data.map((x, index) => {
              return <li key={index}>{x.username}</li>;
            })
          : null}
      </ol>
    </main>
  );
}
