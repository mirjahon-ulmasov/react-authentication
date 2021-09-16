import { Route } from "react-router";
import UnauthorizedPage from "../pages/error/403";

export default function PrivateRoute({ component: Component, path, user }) {
  return (
    <Route
      render={(props) =>
        user.token ? (
          <Component {...props} user={user} path={path} />
        ) : (
          <UnauthorizedPage />
        )
      }
    />
  );
}
