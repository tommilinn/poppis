"use client"

import useAllProfiles from "@/lib/hooks/useAllUserDetails"
import { useEffect, useState } from "react"

interface IScoreboard {
  list: { name: string }
}

export default function Scoreboard() {
  const {data} = useAllProfiles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ol>
        {data ? data.map((x, index)=> {
          return <li key={index}>{x.username}</li>
        }): null}
      </ol>
    </main>
  )
}