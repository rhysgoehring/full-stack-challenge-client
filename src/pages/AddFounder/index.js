import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { MainContainer } from "../../components/Layout";
import { PageHeader, StyledButton } from "../../components/Common";
import {
  Form,
  Label,
  Input,
  ErrorText
} from "../../components/CompanyForm/styles";
import { GREEN } from "../../Colors";

class AddFounder extends React.Component {
  handleSubmit = async values => {
    const { id } = this.props.match.params;

    try {
      await axios.post(
        `https://ancient-woodland-20852.herokuapp.com/companies/${id}/founders`,
        values
      );
      this.props.history.push(`/company/${id}`);
    } catch (error) {
      console.log("error adding founder", error);
    }
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <MainContainer>
        <PageHeader>Add Founder</PageHeader>
        <Formik
          initialValues={{
            name: "",
            title: "",
            company_id: id
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = "Please enter the founder's name";
            }
            if (!values.title) {
              errors.title = "Please enter the founder's title";
            }
          }}
          onSubmit={values => this.handleSubmit(values)}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label margin="2rem 0">
                Founder Name
                {touched.name && errors.name && (
                  <ErrorText>{errors.name}</ErrorText>
                )}
                <Input
                  border={errors.name && "2px solid red"}
                  type="text"
                  name="name"
                  placeholder="Founder Name"
                  width="100rem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </Label>
              <Label margin="2rem 0">
                Founder Title
                {touched.title && errors.title && (
                  <ErrorText>{errors.title}</ErrorText>
                )}
                <Input
                  border={errors.title && "2px solid red"}
                  type="text"
                  name="title"
                  placeholder="Founder Title"
                  width="100rem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </Label>
              <StyledButton text_color="black" bg_color={GREEN} type="submit">
                Submit
              </StyledButton>
            </Form>
          )}
        />
      </MainContainer>
    );
  }
}

export default AddFounder;
