import React from "react";
import Picture_uploaded from "./Picture-uploaded";

export default function HomeSecond({ progress }) {
  progress = 80;
  return (
    <>
      <section className="sideContent-Second">
        <div className="content companyContent">
          <div className="CreateProfileBox">
            <h1 className="CreateProfileTitle">Create your Company Profile </h1>
            <form className="CompanyForm">
              <div className="row">
                <div className="UplaodPicture">
                  <Picture_uploaded />
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 py-3">
                  <div className="form-group focused">
                    <label
                      className="form-control-label mx-1"
                      for="input-username"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="col-lg-5 py-3">
                  <div className="form-group focused">
                    <label
                      className="form-control-label mx-1"
                      for="input-username"
                    >
                      Your Position
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Your position"
                    />
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 py-3">
                  <div className="form-group focused">
                    <label
                      className="form-control-label mx-1"
                      for="input-username"
                    >
                      Company Name
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="col-lg-5 py-3">
                  <div className="form-group focused">
                    <label
                      className="form-control-label mx-1"
                      for="input-username"
                    >
                      Industry
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Industry"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group focused py-3">
                  <label className="form-control-label">Description</label>
                  <textarea
                    // rows="5"
                    className="form-control textarea form-control-alternative"
                    placeholder="A few words about you ..."
                  ></textarea>
                </div>
              </div>
              <div className="row position-relative">
                <button type="submit" className="btn py-2 ComProfileBtn">
                  Done
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
