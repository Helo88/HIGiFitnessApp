import React from "react";
import { Redirect, Route } from "react-router-dom";

function LoggedRoute({ component: Component, ...restOfProps }) {
  const logged = localStorage.getItem("token");
  // console.log("this is check", isStaff);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (logged) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default LoggedRoute;
