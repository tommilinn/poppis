"use client"

import LoginModal from "@/components/ui/loginModal"
import { useEffect, useState } from "react"

interface IScoreboard {
  list: { name: string }
}

export default function Scoreboard() {
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setList(["IssE", "Jallux", "Miikali"])

  }, [])
  console.log(list)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ol>
        {list.map((x, index)=> {
          return <li key={index}>{x}</li>
        })}
      </ol>
    </main>
  )
}