import styled from "styled-components/macro";

const DetailAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
`;

const DetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
`;

const DetailText = styled.p`
  font-size: 2rem;
`;

const DescriptionText = styled.p`
  font-size: 1.8rem;
  line-height: 2rem;
`;

const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;
  width: 90%;
`;

const FounderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export {
  FounderContainer,
  DetailAndButtonWrapper,
  DetailBox,
  DetailText,
  DescriptionText,
  FounderBox
};
