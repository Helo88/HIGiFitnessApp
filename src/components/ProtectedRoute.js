import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isStaff = localStorage.getItem("is_staff");
  const logged = localStorage.getItem("token");
  // console.log("this is check", isStaff);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (isStaff === true) ? (
          console.log("yaraaabbb",isStaff),
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/comm", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
