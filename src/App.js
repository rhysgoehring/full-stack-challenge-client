import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import CompaniesIndex from "./pages/CompaniesIndex/CompaniesIndex";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CompaniesIndex} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
