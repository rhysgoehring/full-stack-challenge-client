import React from "react";
import styled from "styled-components/macro";

const ListItemContainer = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0.5rem 0;
  border-radius: 1.5rem;
`;

const HeaderContainer = styled.div`
  border-bottom: 2px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderH1 = styled.h1`
  font-size: 2.5rem;
  flex: 0.5;
  padding-left: 0.5rem;
  /* align-self: center; */
`;

const HeaderH2 = styled.h2`
  flex: 0.5;
  margin: 0;
`;

const DescriptionText = styled.p`
  padding: 2rem 0;
  font-size: 1.5rem;
`;

const CompanyListItem = props => {
  return (
    <ListItemContainer>
      <HeaderContainer>
        <HeaderH1>{props.name}</HeaderH1>
        <HeaderH2>
          Located In: {props.city}, {props.state}
        </HeaderH2>
        <p>More...</p>
      </HeaderContainer>
      <DescriptionText>{props.description}</DescriptionText>
    </ListItemContainer>
  );
};

export default CompanyListItem;
