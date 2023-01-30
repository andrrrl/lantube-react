import classes from './Player.module.css';
import PlayPause from "../../pages/Videos/Player/PlayPause";
import Next from "../../pages/Videos/Player/Next";
import Previous from "../../pages/Videos/Player/Previous";
import Stop from "../../pages/Videos/Player/Stop";
import VolumeControl from "../../pages/Videos/Player/VolumeControl";
import { GetNextVideoAndPlay, GetPrevVideoAndPlay, StopPlayback, TogglePause, Volume } from "../../services/VideosService";

function stopHandler() {
  StopPlayback();
}

function togglePauseHandler() {
  TogglePause();
}

function prevHandler() {
  GetPrevVideoAndPlay();
}

function nextHandler() {
  GetNextVideoAndPlay();
}

function volumeDownHandler() {
  Volume('down');
}

function volumeUpHandler() {
  Volume('up');
}

function Player(props: any) {

  const stats = props.stats;
  
  return (
    <div className={classes.player}>
      <Previous onPrevious={prevHandler} />
      <Stop onStop={stopHandler} />
      <PlayPause onTogglePause={togglePauseHandler} status={stats.status} />
      <Next onNext={nextHandler} />
      <VolumeControl onVolumeDown={volumeDownHandler} onVolumeUp={volumeUpHandler} />
    </div>
  );
}

export default Player;
