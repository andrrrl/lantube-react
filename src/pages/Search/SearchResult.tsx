import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import VideosContext from "../../store/videos-context"
import Add from "./Add"

function SearchResult(props: any) {
  const video = props.video
  const navigate = useNavigate()
  const videoCtx = useContext(VideosContext)

  function extractVideoId(videoURL: string) {
    return videoURL.replace(/http(s?):\/\/(w{3})?(\.?)youtube\.com\/watch\?v=/, "")
  }

  function addHandler(videoURL: string) {
    const videoId = extractVideoId(videoURL)
    videoCtx.addVideo(videoId).then(() => {
      props.onAdded(video)
      navigate("/videos")
    })
  }

  return (
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div className="d-flex">
          <img width={50} height={50} src={video.img} alt={video.title} />
          <div className="align-self-center justify-self-start text-truncate ms-2">
            {video.title}
          </div>
          <div className="align-self-center mx-2">{video.duration}</div>
        </div>
        <div className="align-self-center justify-self-end">
          <Add key={`add-${video.videoId}`} onAdd={() => addHandler(video.url)} />
        </div>
      </div>
    </div>
  )
}

export default SearchResult
