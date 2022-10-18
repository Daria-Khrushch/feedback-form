import styled from '@emotion/styled';

export const MainContainer = styled.div`
  height: calc(100vh - 100px);
  position: relative;
`;

export const DecorImgOne = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  left: 2.01%;
  right: 91.85%;
  top: 2%;
  bottom: 85.84%;
  z-index: 1;
`;

export const DecorImgTwo = styled.img`
  position: absolute;
  max-width: 80px;
  max-height: 80px;
  left: 714px;
  top: 21px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const DecorImgThree = styled.img`
  position: absolute;
  height: 99%;
  right: 0;
  top: 0px;
`;

export const DecorImgFour = styled.img`
  position: absolute;
  max-width: 80px;
  max-height: 80px;
  right: 24%;
  top: 56%;
  z-index: 1;

  @media (max-width: 660px) {
    display: none;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const DecorImgFive = styled.img`
  position: absolute;
  right: 18%;
  top: 63%;
  max-width: 150px;
  max-height: auto;

  @media (max-width: 660px) {
    display: none;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const DecorImgSix = styled.img`
  position: absolute;
  left: -6.39%;
  right: 4.39%;
  top: 8.95%;
  bottom: 13.32%;
  height: 95%;
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }
`;
