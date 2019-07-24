import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import CompaniesIndex from "./pages/CompaniesIndex";
import CompanyDetails from "./pages/CompanyDetails";
import CreateCompany from "./pages/CreateCompany";
import CompanyEdit from "./pages/CompanyEdit";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CompaniesIndex} />
          <Route path="/company/new" exact component={CreateCompany} />
          <Route path="/company/:id" exact component={CompanyDetails} />
          <Route path="/company/:id/edit" exact component={CompanyEdit} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
