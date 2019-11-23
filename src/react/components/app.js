import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";

import HomePage from "./main/home/index";
import NotFound from "./main/404";

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </ConnectedRouter>
    );
  }
}
