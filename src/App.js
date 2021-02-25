import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

import { loadUser } from "./redux/actions/authActions";
import NavBar from "./components/navbar";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/todo" component={TodoPage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
