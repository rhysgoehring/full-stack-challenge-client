import styled from "styled-components/macro";

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 1rem;
  text-decoration: none;
  padding: 1.5rem;
`;

const PageHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export { StyledButton, PageHeader };
