import { Volume1 as VolumeDownIcon, Volume2 as VolumeUpIcon } from "react-feather"
import Button from "../../ui/Button"

function VolumeControl(props: any) {
  function onVolumeDown() {
    props.onVolumeDown()
  }

  function onVolumeUp() {
    props.onVolumeUp()
  }

  return (
    <>
      <Button onClick={onVolumeDown} size="sm" type="warning">
        <VolumeDownIcon />
      </Button>
      <Button onClick={onVolumeUp} size="sm" type="warning">
        <VolumeUpIcon />
      </Button>
    </>
  )
}

export default VolumeControl
