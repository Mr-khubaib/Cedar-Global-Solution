import React from "react";
import picture from "../image/picture.png";
import { BsArrowRight } from "react-icons/bs";

import ProgressBar from "react-customizable-progressbar";

export default function Home({ progress }) {
  progress = 80;
  return (
    <>
      <section className="sideContent">
        {/* <Navbar /> */}
        <div className="content">
          <div>
            <div className="row firstRow ">
              <div className="col-4 card-1">
                <div className="bgImg">
                  <div className="bgImg-2">
                    <div className="cardContent">
                      <p>
                        Your hired 10 super talented individuals in last 30 days
                      </p>
                      <a href="/">
                        See all &nbsp;
                        <span>
                          <BsArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 card-1">
                <div className="bgImg">
                  <div className="cardContent pb-4">
                    <div className="cardPic d-flex align-items-center ">
                      <div>
                        <img
                          src={picture}
                          alt="...."
                          width={86}
                          height={86}
                          className=" rounded-circle  shadow-sm"
                        ></img>
                      </div>
                      <div className="pictureProfile">
                        <h3>John Doe</h3>
                        <h5> UX Designer</h5>
                      </div>
                    </div>
                    <p>The most productive individuals in last 30 days</p>
                    <a href="/">
                      See profile &nbsp;
                      <span>
                        <BsArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-2 card-1  ">
                <div className="progress-Box">
                  <div className="ProgressTitle ">
                    <h4>Success Rate</h4>
                    <p>15 tasks completed</p>
                  </div>
                  <div className="Progress">
                    <span className="ProgressPercentage">{progress}%</span>
                    <ProgressBar
                      radius={70}
                      progress={progress}
                      strokeWidth={16}
                      strokeColor="#ffffff"
                      strokeLinecap="round"
                      trackStrokeWidth={16}
                      trackStrokeColor="#4163A1"
                      counterClockwise
                    ></ProgressBar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="LineBreak" />
        </div>
      </section>
    </>
  );
}
