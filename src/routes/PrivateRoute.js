import { Route } from "react-router";
import UnauthorizedPage from "../pages/error/403";

export default function PrivateRoute({
  component: Component,
  token,
  path,
  user,
}) {
  return (
    <Route
      render={(props) =>
        token ? (
          <Component {...props} user={user} path={path} token={token} />
        ) : (
          <UnauthorizedPage />
        )
      }
    />
  );
}
