import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background-color: ${({ bg_color }) => bg_color};
  color: ${({ text_color }) => text_color};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ bg_color }) => bg_color};
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 1rem;
  text-decoration: none;
  padding: 1.5rem 2rem;
  margin-top: 0.5rem;
  margin-right: 7rem;
  align-self: flex-end;
`;

const CompanyList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export { CompanyList, LinkButton };
