import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  height: 100px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 460px) {
    justify-content: center;
  }
`;

export const DecorImgOne = styled.img`
  position: absolute;
  height: 110px;
  width: auto;
  left: 2%;
  bottom: 0;

  @media (max-width: 460px) {
    height: 70px;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

export const DecorImgTwo = styled.img`
  position: absolute;
  height: 90px;
  right: 0;
  @media (max-width: 460px) {
    height: 50px;
  }
`;

export const DecorImgThree = styled.img`
  position: absolute;
  height: 70px;
  top: 0;
  right: 10%;
  @media (max-width: 460px) {
    height: 50px;
  }
`;

export const Icons = styled.div`
  margin-left: 200px;

  a {
    margin-right: 20px;
  }

  @media (max-width: 460px) {
    margin-left: 0;
  }
`;
