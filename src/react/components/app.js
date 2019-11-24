import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import HomePage from "./main/home/index";
import NotFound from "./main/404";
import themes from "../styles/themes";
import PageContainer from "../styles/PageContainer";
import { Logo } from "../styles";


const App = () => {

  const [theme, setTheme] = useState(0)
  
  const HomePageWithTheme = () => <HomePage setTheme={setTheme}/>

    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <main>
            <Logo />
            <PageContainer>
              <Switch>
                <Route exact path={"/"} component={HomePageWithTheme} />
                <Route component={NotFound} />
              </Switch>
            </PageContainer>
          </main>
        </ConnectedRouter>
      </ThemeProvider>
    );

}

export default App;
