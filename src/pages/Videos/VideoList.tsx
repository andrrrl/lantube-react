import { useEffect, useState } from "react";
import { DeleteVideo, GetVideos } from "../../services/VideosService";
import Player from "../../components/Layout/Player";
import VideoItem from "./VideoItem";
import classes from "./Videos.module.css";
import { Video } from "../../interfaces/Video";
import Backdrop from "../../ui/Backdrop";
import Modal from "../../ui/Modal";

function Videos(props: any) {
  const stats = props.stats;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteVideo, setDeleteVideo] = useState({});

  async function retrieveVideos() {
    try {
      const result: any = await GetVideos();
      setIsLoaded(true);
      setVideos(result);
    } catch (error: any) {
      setIsLoaded(true);
      setError(error);
    }
  }

  useEffect(() => {
    retrieveVideos();
  }, []);

  function nowPlaying(videoId: string) {
    return videoId === stats.videoId &&
      (stats.status === "playing" || stats.status === "paused")
      ? "blink"
      : "";
  }

  function showModalHandler(video: any) {
    setDeleteVideo(video);
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  async function deleteHandler(id: string) {
    await DeleteVideo(id);
    setShowModal(false);
    retrieveVideos();
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">
        <div className="col">
          <h2>Videos</h2>
          <div>
            <ul className={classes.videoList}>
              {videos
                .map((video: Video) => (
                  <li
                    key={video.videoId}
                    className={`${classes.videoItem} ${classes[nowPlaying(video.videoId)]}`}>
                    <VideoItem
                      video={video}
                      onDeleteModal={() => showModalHandler(video)} />
                  </li>
                ))
                .reverse()}
            </ul>
          </div>
          {showModal && (
            <Modal
              text="Delete Video?"
              body={`${(deleteVideo as any).videoInfo.title}`}
              onClose={closeModalHandler}
              onConfirm={() => deleteHandler((deleteVideo as any).videoId)}
            />
          )}
          {showModal && <Backdrop onCloseModal={closeModalHandler} />}
        </div>
      </div>
    );
  }
}

export default Videos;
