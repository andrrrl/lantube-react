import { useState } from "react";
import { MoreVertical as MoreVerticalIcon } from "react-feather";
import "./Dropdown.css";

function Dropdown(props: any) {
  const [show, setShow] = useState('');

  function toggleDropdownHandler() {
    if (show === '') {
      setShow('show');
    } else {
      setShow('');
    }
  }
  
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm btn-tertiary"
        type="button"
        aria-expanded="false"
        onClick={toggleDropdownHandler}>
        <MoreVerticalIcon />
      </button>
      <ul className={`dropdown-menu ${show}`}>{props.children}</ul>
    </div>
  );
}

export default Dropdown;
