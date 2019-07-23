import React from "react";
import {
  ListItemContainer,
  HeaderContainer,
  HeaderH1,
  HeaderH2,
  DescriptionText,
  LinkToMore
} from "./styles";

const CompanyListItem = props => {
  return (
    <ListItemContainer>
      <HeaderContainer>
        <HeaderH1>{props.name}</HeaderH1>
        <HeaderH2>
          Located In: {props.city}, {props.state}
        </HeaderH2>
        <LinkToMore to={props.linkTo}>More...</LinkToMore>
      </HeaderContainer>
      <DescriptionText>{props.description}</DescriptionText>
    </ListItemContainer>
  );
};

export default CompanyListItem;
