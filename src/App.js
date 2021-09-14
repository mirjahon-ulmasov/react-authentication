import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";

import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/error/404";

export default function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const addTokenHandler = (token) => {
    setToken(token);
  };

  const addUserHandler = (user) => {
    setUser(user);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginPage addUser={addUserHandler} addToken={addTokenHandler} />
      </Route>
      <PrivateRoute
        token={token}
        path="/products"
        user={user}
        component={ProductsPage}
      />
      <PrivateRoute
        token={token}
        path="/search"
        user={user}
        component={SearchPage}
      />
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
