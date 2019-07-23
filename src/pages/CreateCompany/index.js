import React, { Component } from "react";
import axios from "axios";

import { MainContainer } from "../../components/Layout";
import { StyledButton, PageHeader } from "../../components/Common";
import { BLUE, ORANGE, GREEN, RED } from "../../Colors";
import CompanyForm from "../../components/CompanyForm";

class CreateCompany extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  onSubmit = async values => {
    try {
      const response = await axios.post(
        "http://localhost:3000/companies/",
        values
      );
      console.log("response", response);
      this.props.history.push("/");
    } catch (error) {
      console.log("error submitting new company: ", error);
    }
  };

  render() {
    return (
      <MainContainer>
        <PageHeader>Add A New Company</PageHeader>
        <CompanyForm
          onSubmit={this.onSubmit}
          initialName=""
          initialCity=""
          initialState=""
          initialDate=""
          initialDescription=""
        />
      </MainContainer>
    );
  }
}

export default CreateCompany;
