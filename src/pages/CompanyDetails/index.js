import React from "react";
import axios from "axios";
import { MainContainer } from "../../components/Layout";
import { PageHeader, StyledButton } from "../../components/Common";
import {
  DetailAndButtonWrapper,
  DetailBox,
  DetailText,
  DescriptionText,
  FounderBox,
  FounderContainer
} from "./styles";
import { BLUE, RED, GREEN } from "../../Colors";

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: {},
      founders: []
    };
  }

  componentDidMount() {
    this.fetchCompanyInfo();
    this.fetchFounders();
  }

  fetchCompanyInfo = async () => {
    const { id } = this.props.match.params;
    try {
      const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
      this.setState({ company: data });
    } catch (error) {
      console.log("error fetching company info", error);
    }
  };

  fetchFounders = async () => {
    const { id } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `http://localhost:3000/companies/${id}/founders`
      );
      this.setState({ founders: data });
    } catch (error) {
      console.log("error fetching founders", error);
    }
  };

  handleEdit = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/company/${id}/edit`);
  };

  handleAddFounder = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/company/${id}/newFounder`);
  };

  handleDelete = async () => {
    const { id } = this.props.match.params;
    try {
      await axios.delete(`http://localhost:3000/companies/${id}`);
      this.props.history.push("/");
    } catch (error) {
      console.log("error deleting company", error);
    }
  };

  renderFounders = () => {
    return this.state.founders.map(founder => {
      return (
        <div key={founder.id}>
          <DetailText>
            {founder.name}: {founder.title}
          </DetailText>
        </div>
      );
    });
  };

  render() {
    return (
      <MainContainer>
        <PageHeader>{this.state.company.name}</PageHeader>
        <DetailAndButtonWrapper>
          <DetailBox>
            <DetailText>
              Founded On: {this.state.company.date_founded}
            </DetailText>
            <DetailText>
              {this.state.company.city}, {this.state.company.state}
            </DetailText>
          </DetailBox>
          <DetailBox>
            <StyledButton
              onClick={this.handleEdit}
              width="9rem"
              bg_color={BLUE}
            >
              Edit
            </StyledButton>
            <StyledButton
              onClick={this.handleDelete}
              width="9rem"
              bg_color={RED}
              text_color="white"
            >
              Delete
            </StyledButton>
          </DetailBox>
        </DetailAndButtonWrapper>
        <DescriptionText>{this.state.company.description}</DescriptionText>
        <FounderContainer>
          <DetailText>Founders</DetailText>
          <FounderBox>
            {this.renderFounders()}
            <StyledButton onClick={this.handleAddFounder} bg_color={GREEN}>
              Add Founder
            </StyledButton>
          </FounderBox>
        </FounderContainer>
      </MainContainer>
    );
  }
}

export default CompanyDetails;
