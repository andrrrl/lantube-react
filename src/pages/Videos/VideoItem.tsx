import { useContext, useRef, useState } from "react";
import { Trash as DeleteIcon } from "react-feather";
import classes from "./Video.module.css";
import Play from "../Player/Play";
import Dropdown from "../../ui/Dropdown";
import VideosContext from "../../store/videos-context";
import ToastContext from "../../store/toast-context";
import { Video } from "../../interfaces/Video";

function VideoItem(props: any) {
  const [loading, setLoading] = useState(false);
  const videosCtx = useContext(VideosContext);
  const toastCtx = useContext(ToastContext);
  const video: Video = props.video;
  const itemRef: any = useRef(null);

  function playHandler(id: string) {
    setLoading(true);
    videosCtx.playVideo(id).then((res: any) => {
      toastCtx.showToast({
        title: "Lantube message",
        subtitle: `Playback started!`,
        body: `${res.video.videoInfo.title}`,
      });
      setLoading(false);
    });
  }

  return (
    <>
      <img
        className={classes.videoThumb}
        width={200}
        height={200}
        src={video.videoInfo.img}
        alt={video.videoInfo.title}
      />
      <div className="ms-2 align-self-center text-light">
        {video.videoInfo.title}
      </div>
      <Play
        key={`play-${video.videoId}`}
        onPlay={() => playHandler(video.videoId)}
        loading={loading}
      />
      <Dropdown id={video.videoId}>
        <li>
          <a
            href="#delete"
            className="dropdown-item"
            key={`delete-${video.videoId}`}
            id={video.videoId}
            ref={itemRef}
            onClick={() => props.onDeleteModal()}
          >
            <DeleteIcon size="16" /> <small>Delete</small>
          </a>
        </li>
      </Dropdown>
    </>
  );
}

export default VideoItem;
