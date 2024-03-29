import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Layout/Home"
import Search from "./pages/Search/Search"
import MainNavigation, { NoMatch } from "./components/Layout/MainNavigation"
import Videos from "./pages/Videos/VideoList"
import io from "socket.io-client"
import { useState, useEffect } from "react"
import PlayerStats from "./components/Layout/PlayerStats"
import Toast from "./ui/Toast"
import { LoadingPanel } from "./ui/LoadingPanel"

const socket = io("http://192.168.4.54:3000/")
// const socket = io("http://localhost:3000/");

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [stats, setStats] = useState<Stats>()

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true)
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    socket.on("PLAYER_MESSAGE", (stats) => {
      console.log({ stats })
      setStats(stats)
    })

    return () => {
      socket.off("connect")
      socket.off("disconnect")
      socket.off("pong")
    }
  }, [])

  if ((stats as any)?.status && isConnected) {
    return (
      <>
        <main className="container">
          {/* <p>Socket connected: {"" + isConnected}</p>
        <PlayerStats stats={stats}></PlayerStats> */}
          <Router>
            <MainNavigation stats={stats} />
            <Routes>
              <Route path="/" element={<Layout />}>
                {["/", "/home"].map((path, index) => (
                  <Route path={path} element={<Home />} key={`${path}-key`} />
                ))}
                <Route path="search" element={<Search />} />
                <Route path="videos" element={<Videos stats={stats} />} />
                <Route path="stats" element={<PlayerStats stats={stats} />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </Router>
        </main>
        <Toast />
      </>
    )
  } else {
    return <LoadingPanel />
  }
}

export default App
