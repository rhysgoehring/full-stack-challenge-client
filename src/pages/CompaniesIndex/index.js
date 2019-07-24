import React, { Component } from "react";
import axios from "axios";

import { MainContainer } from "../../components/Layout";
import { CompanyList, LinkButton } from "./styles";
import CompanyListItem from "../../components/CompanyListItem";
import { PageHeader } from "../../components/Common";
import { BLUE, ORANGE, GREEN, RED } from "../../Colors";

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
    const { data } = await axios.get(
      "https://ancient-woodland-20852.herokuapp.com/companies"
    );
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
              linkTo={`/company/${company.id}`}
            />
          ))}
          <LinkButton to="/company/new" text_color="black" bg_color={GREEN}>
            Add New Company
          </LinkButton>
        </CompanyList>
      </MainContainer>
    );
  }
}

export default CompaniesIndex;
