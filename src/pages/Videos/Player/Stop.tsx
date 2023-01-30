import { Square as StopIcon } from "react-feather";
import Button from "../../../ui/Button";

function Stop(props: any) {
  return (
    <Button onClick={props.onStop} size="sm" type="danger">
      <StopIcon />
    </Button>
  );
}

export default Stop;
