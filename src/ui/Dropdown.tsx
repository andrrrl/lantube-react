import { useEffect, useRef, useState } from "react";
import { MoreVertical as MoreVerticalIcon } from "react-feather";
import "./Dropdown.css";

function Dropdown(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState("dummy");
  const concernedElement: HTMLElement | any = document.querySelector(
    `ul li a[id=${currentId}]`
  );

  useEffect(() => {
    setCurrentId(props.id);

    function closeDropdownHandler(event: any) {
      if (concernedElement.contains(event.target)) {
        setIsOpen(false);
      } else if (
        event.target.tagName !== "svg" &&
        event.target.className !== "btn btn-sm btn-tertiary toggle-dropdown"
      ) {
        setIsOpen(false);
      }
    }

    if (concernedElement && currentId === concernedElement.getAttribute("id")) {
      document.addEventListener("click", closeDropdownHandler, false);
    }
  }, [props.id, concernedElement, currentId, isOpen]);

  function toggleDropdownHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown d-flex justify-content-center align-items-center">
      <button
        className="btn btn-sm btn-tertiary text-light toggle-dropdown"
        type="button"
        aria-expanded="false"
        onClick={toggleDropdownHandler}
      >
        <MoreVerticalIcon />
      </button>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {props.children}
      </ul>
    </div>
  );
}

export default Dropdown;
