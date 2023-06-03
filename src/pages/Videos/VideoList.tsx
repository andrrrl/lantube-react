import { useEffect, useState, useContext, useCallback } from "react"
import VideosContext from "../../store/videos-context"
import VideoItem from "./VideoItem"
import classes from "./Videos.module.css"
import Backdrop from "../../ui/Backdrop"
import Modal from "../../ui/Modal"
import { Video } from "../../interfaces/Video"

function Videos(props: any) {
  const videosCtx = useContext(VideosContext)
  const stats = props.stats

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videos, setVideos] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [deleteVideo, setDeleteVideo] = useState({})

  const retrieveVideos = useCallback(async () => {
    try {
      const result: any = await videosCtx.getVideos()
      setIsLoaded(true)
      setVideos(result)
    } catch (error: any) {
      setIsLoaded(true)
      setError(error)
    }
  }, [videosCtx])

  useEffect(() => {
    retrieveVideos()
  }, [])

  function nowPlaying(videoId: string) {
    return videoId === stats.videoId &&
      (stats.status === "playing" || stats.status === "paused")
      ? "blink"
      : ""
  }

  function showModalHandler(video: any) {
    setDeleteVideo(video)
    setShowModal(true)
  }

  function closeModalHandler() {
    setShowModal(false)
  }

  async function deleteHandler(id: string) {
    await videosCtx.deleteVideo(id)
    setShowModal(false)
    retrieveVideos()
  }

  if (error) {
    return <div>Error: {error}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="row">
        <div className="col">
          <h2 className="text-light">Videos</h2>
          <div>
            <ul className={classes.videoList}>
              {videos
                .map((video: Video) => (
                  <li
                    key={video.videoId}
                    className={`${classes.videoItem} ${
                      classes[nowPlaying(video.videoId)] || ""
                    }`}
                  >
                    <VideoItem
                      video={video}
                      onDeleteModal={() => showModalHandler(video)}
                    />
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
    )
  }
}

export default Videos
