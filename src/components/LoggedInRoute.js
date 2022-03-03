import React from "react";
import { Redirect, Route } from "react-router-dom";

function LoggedInRoute({ component: Component, ...restOfProps }) {
  const logged = localStorage.getItem("token");
  const isStaff = localStorage.getItem("is_staff");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (isStaff === 'false') ? (
          <Component {...restOfProps} {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default LoggedInRoute;
