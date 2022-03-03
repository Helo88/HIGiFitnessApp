import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import "../style/posts.css";
import { ClockFill, Calendar2EventFill } from "react-bootstrap-icons";
import { axiosInstance } from "../js/network/index";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get("http://127.0.0.1:8000/posts/").then((data) => {
      setPosts(data.data);
    });
  }, []);

  return (
    <div id="bd1" className="mt-3 containercolor">
      {posts.map((p) => {
        return (
          <div className="container">
            <div className="row justify-content-md-center" key={p.id}>
              <div className=" mb-5 col-md-10" id="opp">
                <br />
                <div id="dt" className="text-muted mt-3">
                  <Calendar2EventFill /> <span className="">{p.date}</span>
                  &nbsp; &nbsp;
                  <ClockFill /> <span className=" ">{p.time}</span>
                </div>
                <Link to={`/comm/${p.id}`}>
                  <p className="mt-3" id="content">
                    {p.text}
                  </p>
                </Link>
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
