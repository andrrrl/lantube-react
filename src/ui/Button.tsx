import React, { useEffect, useState } from "react";

function Button(props: any) {
  const btn = "btn";
  const [size, setSize] = useState("md");
  const [type, setType] = useState("success");

  useEffect(() => {
    setSize(props.size);
    setType(props.type);
  }, [props.size, props.type]);

  function clickHandler() {
    props.onClick();
  }

  return (
    <button className={`${btn} btn-${size} btn-${type}`} onClick={clickHandler}>
      {props.children}
    </button>
  );
}

export default Button;
