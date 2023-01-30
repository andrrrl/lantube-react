import { SkipBack as PreviousIcon } from "react-feather";
import Button from "../../../ui/Button";

function Previous(props: any) {
  function onPreviousHandler() {
    props.onPrevious();
  }
  return (
    <Button onClick={onPreviousHandler} size="sm" type="primary">
      <PreviousIcon />
    </Button>
  );
}

export default Previous;
