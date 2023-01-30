// Retrieve My Videos
function GetVideos(): Promise<any[]> {
  return fetch("/api/videos").then((res) => res.json());
}

// Get 1 of My Videos by id
function GetVideo(id: string): Promise<any> {
  return fetch("/api/videos/" + id).then((res) => res.json());
}

// Play any of My Videos by id
function PlayVideo(id: string) {
  return fetch("/api/player/" + id + "/play").then((res) => res.json());
}

// Stop any Playback
function StopPlayback() {
  return fetch("/api/player/stop").then((res) => res.json());
}

function TogglePause() {
  return fetch("/api/player/pause").then((res) => res.json());
}

function Volume(volume: "up" | "down") {
  return fetch("/api/player/volume/" + volume).then((res) => res.json());
}

function GetPrevVideoAndPlay() {
  return fetch("/api/player/prev").then((res) => res.json());
}

function GetNextVideoAndPlay() {
  return fetch("/api/player/next").then((res) => res.json());
}

// (Youtube) Video Search for adding to My Videos
function SearchVideos(term: string) {
  return fetch("/api/videos/search/" + term).then((res) => res.json());
}

function AddVideo(youtubeId: string) {
  return fetch("/api/videos/add/" + youtubeId).then((res) => res.json());
}

function DeleteVideo(youtubeId: string) {
  return fetch("/api/videos/delete/" + youtubeId, { method: 'delete' }).then((res) => res.json());
}

export {
  GetVideos,
  GetVideo,
  PlayVideo,
  StopPlayback,
  SearchVideos,
  AddVideo,
  DeleteVideo,
  GetPrevVideoAndPlay,
  GetNextVideoAndPlay,
  TogglePause,
  Volume,
};
