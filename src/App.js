import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";

import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute
        authed={localStorage.getItem("token")}
        path="/products"
        component={ProductsPage}
      />
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
