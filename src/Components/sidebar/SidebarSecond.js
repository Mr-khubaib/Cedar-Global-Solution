import React from "react";
import { Link } from "react-router-dom";
import cedarSecond from "../image/cedar-Second.png";
import featherCalendar from "../image/feather-calendar.svg";
import featherHome from "../image/feather-home.svg";
import ionicIosPersonAdd from "../image/ionic-ios-person-add.svg";
import materialGroup from "../image/material-group.svg";
import materialPayment from "../image/material-payment.svg";
import logout from "../image/logout.svg";

export default function SidebarSecond() {
  return (
    <>
      {/* SideBar */}
      <div className="vertical-nav " id="SideBarSecond">
        <div className="cedar-logo-Second">
          <Link to="/">
            <img src={cedarSecond} alt="...."></img>
          </Link>
        </div>

        <ul className="MainMenu-Second">
          <li>
            <Link to="/followers">
              <i>
                <img src={featherHome} alt="...." />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/liveStream">
              <i>
                <img src={materialGroup} alt="...." />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/ExploreChannel">
              <i>
                <img src={ionicIosPersonAdd} alt="...." />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/savedCourse">
              <i>
                <img src={materialPayment} alt="...." />
              </i>
            </Link>
          </li>
          <li>
            <Link aria-current="page" to="/courseFeed">
              <i>
                <img src={featherCalendar} alt="...." />
              </i>
            </Link>
          </li>
        </ul>

        <div className="logout">
          <a href="" className="LogoutIcon">
            <i>
              <img src={logout} />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}
