import React from "react"
import Backdrop from "./Backdrop"

export const LoadingPanel = () => {
  const closeModalHandler = (e: any) => {
    console.log(e)
  }

  return (
    <div className="">
      <div>Connecting...</div>
      <Backdrop onCloseModal={(e: any) => closeModalHandler(e)} />
    </div>
  )
}
