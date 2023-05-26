import { createContext, useState, useMemo, useCallback } from "react";

const VideosContext = createContext<any | null>({
  videos: [],
  getVideos: () => {},
  getVideo: (videoId: string) => {},
  playVideo: (videoId: string) => {},
  stopPlayback: () => {},
  togglePause: () => {},
  volume: (volume: "up" | "down") => {},
  getPrevVideoAndPlay: () => {},
  getNextVideoAndPlay: () => {},
  searchVideos: (term: string) => {},
  addVideo: (youtubeId: string) => {},
  deleteVideo: (id: string) => {},
});

export const VideosContextProvider = (props: any) => {
  const [videos, setVideos] = useState([]);

  // Retrieve My Videos
  const getVideos = useCallback((): Promise<any[]> => {
    return fetch("/api/videos").then((res: any) => {
      setVideos(res);
      return res.json();
    });
  }, [setVideos]);

  // Get 1 of My Videos by id
  const getVideo = useCallback((id: string): Promise<any> => {
    return fetch("/api/videos/" + id).then((res) => res.json());
  }, []);

  // Play any of My Videos by id
  const playVideo = (id: string) => {
    return fetch("/api/player/" + id + "/play").then((res) => res.json());
  };

  // Stop any Playback
  const stopPlayback = () => {
    return fetch("/api/player/stop").then((res) => res.json());
  };

  const togglePause = () => {
    return fetch("/api/player/pause").then((res) => res.json());
  };

  const volume = (volume: "up" | "down") => {
    return fetch("/api/player/volume/" + volume).then((res) => res.json());
  };

  const getPrevVideoAndPlay = () => {
    return fetch("/api/player/prev").then((res) => res.json());
  };

  const getNextVideoAndPlay = () => {
    return fetch("/api/player/next").then((res) => res.json());
  };

  // (Youtube) Video Search for adding to My Videos
  const searchVideos = (term: string): Promise<any> => {
    return fetch("/api/videos/search/" + term).then((res) => res.json());
  };

  const addVideo = (youtubeId: string) => {
    return fetch("/api/videos/add/" + youtubeId).then((res) => res.json());
  };

  const deleteVideo = (id: string) => {
    return fetch("/api/videos/deslete/" + id, { method: "delete" }).then(
      (res) => res.json()
    );
  };

  const context: any = useMemo(() => {
    return {
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
  }, [
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
  ]);

  const { children } = props;

  return (
    <VideosContext.Provider value={context}>{children}</VideosContext.Provider>
  );
};

export default VideosContext;
