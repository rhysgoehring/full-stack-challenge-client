import React from "react";
import axios from "axios";
import { MainContainer } from "../../components/Layout";
import { PageHeader } from "../../components/Common";
import CompanyForm from "../../components/CompanyForm";

class CreateCompany extends React.Component {
  onSubmit = async values => {
    try {
      await axios.post(
        "https://ancient-woodland-20852.herokuapp.com/companies/",
        values
      );
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
