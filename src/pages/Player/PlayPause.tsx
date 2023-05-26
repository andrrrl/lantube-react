import { useState } from "react";
import { Play as PlayIcon, Pause as PauseIcon } from "react-feather";
import Button from "../../ui/Button";

function PlayPause(props: any) {
  const [isPlaying, setIsPlaying] = useState(props.status === "playing");

  function onTogglePause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <Button onClick={onTogglePause} size="sm" type="success">
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  );
}

export default PlayPause;
