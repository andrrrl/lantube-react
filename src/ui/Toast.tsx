import { useContext, useRef } from "react";
import ToastContext from "../store/toast-context";

function Toast(props: any) {
  const toastCtx = useContext(ToastContext);
  const toastRef = useRef(null);

  function showHandler() {
    toastCtx.showToast();
  }

  function hideHandler() {
    toastCtx.hideToast();
  }

  return (
    <>
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        ref={toastRef}
      >
        <div
          id="liveToast"
          className={`toast live fade ${toastCtx.isOpen ? "show" : "hide"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">{toastCtx.toast.title}</strong>
            <small>{toastCtx.toast.subtitle}</small>
            <button
              onClick={hideHandler}
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{toastCtx.toast.body}</div>
        </div>
      </div>
    </>
  );
}

export default Toast;
