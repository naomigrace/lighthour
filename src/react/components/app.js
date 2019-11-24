import React, { Component } from "react"
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router"

import { history } from "../redux/store"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"

import HomePage from "./main/home/index"
import NotFound from "./main/404"
import themes from "../styles/themes";
import PageContainer from "../styles/PageContainer";
import { Logo } from "../styles";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes[0]}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <main>
            <Logo />
            <PageContainer>
              <Switch>
                <Route exact path={"/"} component={HomePage} />
                <Route component={NotFound} />
              </Switch>
            </PageContainer>
          </main>
        </ConnectedRouter>
      </ThemeProvider>
    );
  }
}
