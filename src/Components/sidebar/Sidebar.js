import React from "react";
import { Link } from "react-router-dom";
import cedar from "../image/cedar-logo.png";
import featherCalendar from "../image/feather-calendar.svg";
import featherHome from "../image/feather-home.svg";
import ionicIosPersonAdd from "../image/ionic-ios-person-add.svg";
import materialGroup from "../image/material-group.svg";
import materialPayment from "../image/material-payment.svg";
import logout from "../image/logout.svg";

export default function Sidebar() {
  return (
    <>
      {/* SideBar */}
      <div className="vertical-nav " id="SideBar">
        <div className="cedar-logo">
          <Link to="/">
            <img src={cedar} alt="...."></img>
          </Link>
        </div>

        <ul className="MainMenu">
          <li>
            <Link to="/followers">
              <i>
                <img src={featherHome} alt="...." />
              </i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/liveStream">
              <i>
                <img src={materialGroup} alt="...." />
              </i>
              Candidates
            </Link>
          </li>
          <li>
            <Link to="/ExploreChannel">
              <i>
                <img src={ionicIosPersonAdd} alt="...." />
              </i>
              Post a Job
            </Link>
          </li>
          <li>
            <Link to="/savedCourse">
              <i>
                <img src={materialPayment} alt="...." />
              </i>
              Payments
            </Link>
          </li>
          <li>
            <Link aria-current="page" to="/courseFeed">
              <i>
                <img src={featherCalendar} alt="...." />
              </i>
              Calender
            </Link>
          </li>
        </ul>
        <div className="logout">
          <a href="" className="LogoutIcon">
            <i>
              <img src={logout} />
            </i>
            Logout
          </a>
        </div>
      </div>
    </>
  );
}
