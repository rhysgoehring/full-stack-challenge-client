import React, { Component } from "react";
import axios from "axios";

import { MainContainer } from "../../components/Layout";
import { CompanyList, PageHeader } from "./styles";
import CompanyListItem from "../../components/CompanyListItem";

class CompaniesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    this.fetchCompanies();
  }

  fetchCompanies = async () => {
    const { data } = await axios.get("http://localhost:3000/companies");
    this.setState({ companies: data });
  };

  render() {
    return (
      <MainContainer>
        <PageHeader>TechStars Companies</PageHeader>
        <CompanyList>
          {this.state.companies.map(company => (
            <CompanyListItem
              key={company.id}
              name={company.name}
              city={company.city}
              state={company.state}
              description={company.description}
            />
          ))}
        </CompanyList>
      </MainContainer>
    );
  }
}

export default CompaniesIndex;
