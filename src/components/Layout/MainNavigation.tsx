import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function MainNavigation({}: Props) {
  return (
    <header className="w-25">
        <nav className="nav d-flex justify-content-between">
          <span className="nav-item">
            <Link to={"/"}>Home</Link>
          </span>
          <span className="nav-item">
            <Link to={"videos"}>Videos</Link>
          </span>
          <span className="nav-item">
            <Link to={"search"}>Search</Link>
          </span>
          <span className="nav-item">
            <Link to="/nothing-here">Nothing Here</Link>
          </span>
        </nav>
    </header>
  );
}

export function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default MainNavigation;
