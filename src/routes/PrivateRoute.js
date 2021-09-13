import { Redirect, Route } from "react-router";

export default function PrivateRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      render={(props) =>
        authed ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
