import { useState, createContext } from "react"

interface Stats {
  player?: string
  action?: string
  status?: string
  videoId?: string
  videoInfo?: {
    videoId?: string
    title?: string
    url?: string
    img?: string
  }
  playlist?: boolean
  volume?: number
  lastUpdated?: string
}

const PlayerContext = createContext<Stats | null>({})

function PlayerContextProvider(props: any) {
  const [playerStats, setPlayerStats] = useState({})

  const context = {
    ...playerStats,
  }

  return (
    <PlayerContext.Provider value={context}>{props.children}</PlayerContext.Provider>
  )
}
