import React from "react";
import Play from "./Player/Play";
import classes from "./Video.module.css";
import { Video } from "../../interfaces/Video";
import { PlayVideo } from "../../services/VideosService";
import Delete from "./Player/Delete";
import Dropdown from "../../ui/Dropdown";
import { Trash as DeleteIcon } from 'react-feather';

function playHandler(id: string) {
  PlayVideo(id);
}

function VideoItem(props: any) {
  const video: Video = props.video;

  return (
    <>
      <img
        className={classes.videoThumb}
        width={200}
        height={200}
        src={video.videoInfo.img}
        alt={video.videoInfo.title}
      />
      <div className="ms-2 align-self-center">{video.videoInfo.title}</div>
      <div className="d-flex align-self-center">
        <Play
          key={`play-${video.videoId}`}
          onPlay={() => playHandler(video.videoId)}
        />
        <Dropdown>
          <li>
            <a href="#asdsad" className="dropdown-item" key={`delete-${video.videoId}`}
              onClick={props.onDeleteModal}>
                <DeleteIcon /> Delete
            </a>
          </li>
        </Dropdown>
      </div>
    </>
  );
}

export default VideoItem;
