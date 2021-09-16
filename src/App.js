import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";

import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/error/404";

export default function App() {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(loggedInUser);

  const addUserHandler = (user) => {
    setUser(user);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginPage addUser={addUserHandler} />
      </Route>
      <PrivateRoute path="/products" user={user} component={ProductsPage} />
      <PrivateRoute path="/search" user={user} component={SearchPage} />
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
