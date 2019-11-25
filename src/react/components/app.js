import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import HomePage from "./main/home/index";
import NotFound from "./main/404";
import { Footer, TimeLabel } from "../styles"
import themes from "../styles/themes";
import PageContainer from "../styles/PageContainer";

const App = () => {
  const [theme, setTheme] = useState(0);

  const HomePageWithTheme = () => <HomePage setTheme={setTheme} />;

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <main>
          <PageContainer>
            <Switch>
              <Route exact path={"/"} component={HomePageWithTheme} />
              <Route component={NotFound} />
            </Switch>
          </PageContainer>
        </main>
        <Footer>
        <div>
          © {new Date().getFullYear()} lighthour | <span>whipped up by N &amp; N</span> | <TimeLabel/> | <a href="mailto:naomigracep@gmail.com">send feedback</a>
        </div>
        <div>
          <small>golden hour is the period of daytime shortly after sunrise or before sunset, during which daylight is redder and softer than when the Sun is higher in the sky <a target="__blank" href="https://en.wikipedia.org/wiki/Golden_hour_(photography)">[1]</a></small>
        </div>
        </Footer>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
