import React from "react";
import axios from "axios";
import { MainContainer } from "../../components/Layout";
import { PageHeader } from "../../components/Common";
import CompanyForm from "../../components/CompanyForm";

class CompanyEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      date_founded: "",
      description: "",
      name: "",
      state: ""
    };
  }

  componentDidMount() {
    this.fetchCompanyInfo();
  }

  onSubmit = async values => {
    const { id } = this.props.match.params;
    try {
      await axios.put(
        `https://ancient-woodland-20852.herokuapp.com/companies/${id}`,
        values
      );
      this.props.history.push("/");
    } catch (error) {
      console.log("error editing company details");
    }
  };

  fetchCompanyInfo = async () => {
    const { id } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `https://ancient-woodland-20852.herokuapp.com/companies/${id}`
      );
      this.setState({
        city: data.city,
        date_founded: data.date_founded,
        description: data.description,
        name: data.name,
        state: data.state
      });
    } catch (error) {
      console.log("error fetching company info", error);
    }
  };

  render() {
    return (
      <MainContainer>
        <PageHeader>{this.state.name}</PageHeader>
        <CompanyForm
          onSubmit={this.onSubmit}
          initialName={this.state.name}
          initialCity={this.state.city}
          initialState={this.state.state}
          initialDate={this.state.date_founded}
          initialDescription={this.state.description}
        />
      </MainContainer>
    );
  }
}

export default CompanyEdit;
