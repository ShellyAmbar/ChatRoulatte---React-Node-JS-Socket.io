import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/" />;
        }}
      ></Route>
    </div>
  );
}
