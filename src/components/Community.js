import React, { useEffect, useState } from "react";
import "../style/ComStyle.css";
import mylogo from "../images/logo.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";

const Community = () => {
  return (
    <>
      <div className="container-fluid" id="tit">
        <span href="#" className="navbar-brand" id="tit2">
          HIGE Fitness App Community
        </span>
      </div>

      <div className="container-fluid gedf-wrapper pt-5" id="body">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 gedf-main">
            <div className="card gedf-card">
              <div className="card-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="posts"
                    role="tabpanel"
                    aria-labelledby="posts-tab"
                  >
                    <div className="form-group">
                      <label className="sr-only" for="message">
                        Write a post
                      </label>
                      <textarea
                        className="form-control mt-3"
                        id="message"
                        rows="3"
                        placeholder="What are you thinking?"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <br />
                <div className="btn-toolbar justify-content-between">
                  <div className="btn-group">
                    <button type="submit" className="btn" id="postBtn">
                      Share Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* loop to show posts */}
            <div className="card gedf-card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      {/* trainee image */}
                      <img
                        className="rounded-circle"
                        width="45"
                        src={`${mylogo}`}
                      />
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">Trainee username</div>
                      <div className="h7 text-muted">
                        Trainee Name or any other detail
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="text-muted h7 mb-2">
                  {" "}
                  <ClockFill/> Time Created
                </div>
                

                <p className="card-text">Post content</p>
              </div>
              <div className="card-footer">
                <span href="#" className="card-link" id="com">
                  <ChatDotsFill /> Comment
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
