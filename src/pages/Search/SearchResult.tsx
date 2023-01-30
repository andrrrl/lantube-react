import React from "react";
import { AddVideo } from "../../services/VideosService";
import Add from "./Add";

function SearchResult(props: any) {
  const video = props.video;

  function extractVideoId(videoURL: string) {
    return videoURL.replace(/http(s?):\/\/(w{3})?(\.?)youtube\.com\/watch\?v=/, '');
}

  function addHandler(videoURL: string) {
    const videoId = extractVideoId(videoURL);
    AddVideo(videoId);
  }

  return (
    <div className="row">
      <div className="col-4 d-flex justify-content-start">
        <img width={50} height={50} src={video.img} alt={video.title} />
        <div className="align-self-center justify-self-start text-truncate ms-2">{video.title}</div>
        <div className="align-self-center mx-2">{video.duration}</div>
        <div className="align-self-center justify-self-end">
          <Add key={`add-${video.videoId}`} onAdd={() => addHandler(video.url)} />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
