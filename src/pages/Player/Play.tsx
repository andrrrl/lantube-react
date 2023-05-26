import { Play as PlayIcon } from "react-feather";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

function Play(props: any) {
  return (
    <Button onClick={props.onPlay} size="sm" type="light">
      {!props.loading ? <PlayIcon /> : <Spinner />}
    </Button>
  );
}

export default Play;
