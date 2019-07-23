import React, { Component } from "react";
import axios from "axios";

import { MainContainer } from "../../components/Layout";
import { StyledButton, PageHeader } from "../../components/Common";
import { BLUE, ORANGE, GREEN, RED } from "../../Colors";
import CompanyForm from "../../components/CompanyForm";

class CreateCompany extends Component {
  render() {
    return (
      <MainContainer>
        <PageHeader>Add A New Company</PageHeader>
        <CompanyForm />
      </MainContainer>
    );
  }
}

export default CreateCompany;
