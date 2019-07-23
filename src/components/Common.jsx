import styled from "styled-components/macro";

const StyledButton = styled.button`
  background-color: ${({ bg_color }) => bg_color};
  color: ${({ text_color }) => text_color};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ bg_color }) => bg_color};
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
