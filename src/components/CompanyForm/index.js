/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Formik } from "formik";
import {
  Form,
  Input,
  Label,
  InputWrapper,
  DescriptionInput,
  ErrorText
} from "./styles";
import { StyledButton } from "../Common";
import { GREEN } from "../../Colors";

const CompanyForm = ({
  onSubmit,
  initialName,
  initialCity,
  initialState,
  initialDate,
  initialDescription
}) => {
  return (
    <Formik
      initialValues={{
        name: initialName,
        city: initialCity,
        state: initialState,
        date_founded: initialDate,
        description: initialDescription
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Please enter a company name";
        }
        if (!values.city) {
          errors.city = "Please enter a city";
        }
        if (!values.state) {
          errors.state = "Please enter a state abbreviation";
        }
        if (values.state.length !== 2) {
          errors.state = "Please enter a state abbreviation";
        }
        if (!values.description) {
          errors.description = "Please enter a description";
        }
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
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
            Company Name
            {touched.name && errors.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}
            <Input
              border={errors.name && "2px solid red"}
              type="text"
              name="name"
              placeholder="Company Name"
              width="100rem"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </Label>
          <InputWrapper>
            <Label>
              City
              {touched.city && errors.city && (
                <ErrorText>{errors.city}</ErrorText>
              )}
              <Input
                border={errors.text && "2px solid red"}
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
            </Label>
            <Label>
              State
              {touched.state && errors.state && (
                <ErrorText>{errors.state}</ErrorText>
              )}
              <Input
                border={errors.state && "2px solid red"}
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              />
            </Label>
            <Label>
              Date Founded
              {touched.date_founded && errors.date_founded && (
                <ErrorText>{errors.date_founded}</ErrorText>
              )}
              <Input
                // border={errors.date && "1px solid red"}
                type="date"
                name="date_founded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date_founded}
              />
            </Label>
          </InputWrapper>
          <Label>
            Description
            {touched.description && errors.description && (
              <ErrorText>{errors.description}</ErrorText>
            )}
            <DescriptionInput
              name="description"
              placeholder="Enter Description...."
              border={errors.description && "1px solid red"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </Label>
          <StyledButton textColor="black" bgColor={GREEN} type="submit">
            Submit
          </StyledButton>
        </Form>
      )}
    />
  );
};

export default CompanyForm;
