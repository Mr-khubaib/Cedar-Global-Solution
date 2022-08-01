import React from "react";
import { Link } from "react-router-dom";
import img2 from "../image/ProfileIcon.png";
import topMsg from "../image/topMsg.png";
import topAlert from "../image/topAlert.png";
import topOption from "../image/topOption.png";

export default function Navbar() {
  return (
    <header className="headerOne  headerWidthOne">
      <nav className="navbar container-fluid  navbar-expand-lg navFirst">
        <div className="container-fluid">
          <a className="navbar-brand  " href="/"></a>
          <div className="topMenu ">
            <Link to="/">
              <ul className="NavIcon">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <img src={topOption} alt="...." />
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <img src={topMsg} alt="...." />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <img src={topAlert} alt="...." />
                  </Link>
                </li>
              </ul>
            </Link>
            <Link to="/signUp">
              <img
                src={img2}
                alt="...."
                width={56}
                height={56}
                className=" TopIcon rounded-circle  shadow-sm"
              ></img>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
