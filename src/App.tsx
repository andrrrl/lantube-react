import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Player from "./components/Layout/Player";
import Search from "./pages/Search/Search";
import MainNavigation, { NoMatch } from "./components/Layout/MainNavigation";
import Videos from "./pages/Videos/VideoList";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import PlayerStats from "./components/Layout/PlayerStats";

const socket = io("http://192.168.4.54:3000/");
// const socket = io("http://localhost:3000/");


export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [stats, setStats] = useState({});

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    
    socket.on("PLAYER_MESSAGE", (stats) => {
      console.log({stats});
      setStats(stats);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  if ((stats as any).player as any) {
    return (
      <main className="container">
        <h1>Lantube React!</h1>

        <p>LAN youtube player</p>
          <p>Socket connected: {"" + isConnected}</p>
          <PlayerStats stats={stats}></PlayerStats>
        <Router>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Player stats={stats} />} />
              <Route path="search" element={<Search />} />
              <Route path="videos" element={<Videos stats={stats} />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </main>
    );
  } else {
    return (
      <div>Connecting...</div>
    )
  }
}
