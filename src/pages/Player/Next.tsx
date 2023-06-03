import { SkipForward as NextIcon } from "react-feather"
import Button from "../../ui/Button"

function Next(props: any) {
  function onNextHandler() {
    props.nextHandler()
  }
  return (
    <Button onClick={onNextHandler} size="sm" type="primary">
      <NextIcon />
    </Button>
  )
}

export default Next
