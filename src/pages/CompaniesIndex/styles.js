import styled from "styled-components/macro";

const CompanyList = styled.ul`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  width: 100%;
`;

const PageHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export { CompanyList, PageHeader };
