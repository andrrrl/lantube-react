import { createContext, useState } from 'react';

interface VideoContext {
  videos: object;
}

const VideosContext = createContext<any | null>({
  videos: [],
  getVideos: () => {},
  getVideo: (videoId: string) => {},
  playVideo: (videoId: string) => {},
  stopPlayback: () => {},
  togglePause: () => {},
  volume: (volume: 'up' | 'down') => {},
  getPrevVideoAndPlay: () => {},
  getNextVideoAndPlay: () => {},
  searchVideos: (term: string) => {},
  addVideo: (youtubeId: string) => {},
  deleteVideo: (id: string) => {},
});

export function VideosContextProvider(props: any) {

  // Retrieve My Videos
function getVideos(): Promise<any[]> {
  return fetch("/api/videos").then((res: any) => {
    setVideos(res);
    return res.json()
  });
}

// Get 1 of My Videos by id
function getVideo(id: string): Promise<any> {
  return fetch("/api/videos/" + id).then((res) => res.json());
}

// Play any of My Videos by id
function playVideo(id: string) {
  return fetch("/api/player/" + id + "/play").then((res) => res.json());
}

// Stop any Playback
function stopPlayback() {
  return fetch("/api/player/stop").then((res) => res.json());
}

function togglePause() {
  return fetch("/api/player/pause").then((res) => res.json());
}

function volume(volume: "up" | "down") {
  return fetch("/api/player/volume/" + volume).then((res) => res.json());
}

function getPrevVideoAndPlay() {
  return fetch("/api/player/prev").then((res) => res.json());
}

function getNextVideoAndPlay() {
  return fetch("/api/player/next").then((res) => res.json());
}

// (Youtube) Video Search for adding to My Videos
function searchVideos(term: string): Promise<any> {
  return fetch("/api/videos/search/" + term).then((res) => res.json());
}

function addVideo(youtubeId: string) {
  return fetch("/api/videos/add/" + youtubeId).then((res) => res.json());
}

function deleteVideo(id: string) {
  return fetch("/api/videos/delete/" + id, { method: 'delete' }).then((res) => res.json());
}
  
  const [videos, setVideos] = useState([]);

  const context = {
      videos,
      getVideos,
      getVideo,
      playVideo,
      stopPlayback,
      togglePause,
      volume,
      getPrevVideoAndPlay,
      getNextVideoAndPlay,
      searchVideos,
      addVideo,
      deleteVideo,
  };

  return <VideosContext.Provider value={context}>
      {props.children}
  </VideosContext.Provider>

}

export default VideosContext;
