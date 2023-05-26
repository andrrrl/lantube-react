import classes from "./Player.module.css";
import PlayPause from "../../pages/Player/PlayPause";
import Next from "../../pages/Player/Next";
import Previous from "../../pages/Player/Previous";
import Stop from "../../pages/Player/Stop";
import VolumeControl from "../../pages/Player/VolumeControl";
import { useContext } from "react";
import VideosContext from "../../store/videos-context";

function Player(props: any) {
  const videosCtx = useContext(VideosContext);
  const stats = props.stats;

  function stopHandler() {
    videosCtx.stopPlayback();
  }

  function togglePauseHandler() {
    videosCtx.togglePause();
  }

  function prevHandler() {
    videosCtx.getPrevVideoAndPlay();
  }

  function nextHandler() {
    videosCtx.getNextVideoAndPlay();
  }

  function volumeDownHandler() {
    videosCtx.volume("down");
  }

  function volumeUpHandler() {
    videosCtx.volume("up");
  }

  return (
    <div className={classes.player}>
      <Previous onPrevious={prevHandler} />
      <Stop onStop={stopHandler} />
      <PlayPause onTogglePause={togglePauseHandler} status={stats.status} />
      <Next onNext={nextHandler} />
      <VolumeControl
        onVolumeDown={volumeDownHandler}
        onVolumeUp={volumeUpHandler}
      />
    </div>
  );
}

export default Player;
