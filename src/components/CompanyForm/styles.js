import styled from "styled-components/macro";
import { RED } from "../../Colors";

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  border: ${({ border }) => border || "1px solid black"};
  width: ${({ width }) => width};
  height: 3.5rem;
  font-size: 1.5rem;
  color: black;
  border-radius: 1rem;

  ::placeholder {
    color: black;
  }

  :-ms-input-placeholder {
    color: black;
  }

  ::-ms-input-placeholder {
    color: black;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  /* color: #777; */
  font-size: 1.3rem;
  margin: ${({ margin }) => margin || "0.5rem 0"};
  position: relative;
`;

const DescriptionInput = styled.textarea`
  line-height: 1.5;
  border-radius: 1rem;
  padding: 1rem;
  width: 90rem;
  height: 15rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border: ${({ border }) => border || "1px solid black"};

  ::placeholder {
    color: black;
  }

  :-ms-input-placeholder {
    color: black;
  }

  ::-ms-input-placeholder {
    color: black;
  }
`;

const ErrorText = styled.p`
  color: ${RED};
  font-size: 1.5rem;
`;

export { Form, Input, Label, InputWrapper, DescriptionInput, ErrorText };
