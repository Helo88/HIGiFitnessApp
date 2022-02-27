import React from "react";
import { Redirect, Route } from "react-router-dom";

function TrainerRoute({ component: Component, ...restOfProps }) {
  const logged = localStorage.getItem("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (logged)? (
            <Component {...restOfProps} {...props} />
          
         )
        : (
            <Redirect to={{ pathname: "/", state: { from: props.location }, }} />
        )
      }
    />
  );
}

export default TrainerRoute;
