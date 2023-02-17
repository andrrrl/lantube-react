import { useState } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import Player from "./Player";
const tocadiscos = require('../../assets/img/lantube-tocadiscos.png');

function MainNavigation(props: any) {

  const [activeRoute, setActiveRoute] = useState('home');

  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light rounded-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-column align-items-center me-5">
              <img className={classes.logoBrand} src={tocadiscos} alt="Tocadiscos Lantube" />
              <small>Lantube</small>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-0">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"videos"} className="nav-link">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"search"} className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stats" className="nav-link">
                  Stats
                </Link>
              </li>
            </ul>
            <Player stats={props.stats} />
          </div>
        </div>
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
