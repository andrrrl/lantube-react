import { useEffect, useState } from "react"
import Button from "./Button"
import "./Modal.css"

function Modal(props: any) {
  const [isHidden, setIsHidden] = useState(true)
  const [size, setSize] = useState("sm")
  const [type, setType] = useState("danger")

  function onCancelHandler() {
    setIsHidden(true)
    props.onClose()
  }

  function onConfirmHandler() {
    setIsHidden(true)
    props.onConfirm()
  }

  useEffect(() => {
    setIsHidden(false)
    setSize(props.size || "sm")
    setType(props.type || "danger")
  }, [props.size, props.type])

  return (
    <div className="modal d-flex" aria-hidden={isHidden}>
      <div className={`modal-dialog modal-${size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props?.text}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCancelHandler}
            ></button>
          </div>
          <div className="modal-body">{props?.body}</div>
          <div className="modal-footer">
            <Button onClick={onCancelHandler} size={size} type="secondary">
              Cancel
            </Button>
            <Button onClick={onConfirmHandler} size={size} type={type}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
