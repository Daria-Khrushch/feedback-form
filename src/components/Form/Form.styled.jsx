import styled from '@emotion/styled';

export const Container = styled.form`
  max-width: 500px;
  z-index: 1;
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 660px) {
    max-width: 300px;
    margin-left: 0;
    margin: 0 auto;
    align-items: center;
    margin-top: 50px;
  }

  @media (max-width: 460px) {
    max-width: 200px;
    margin-left: 0;
    margin: 0 auto;
    align-items: center;
    margin-top: 50px;
  } ;
`;

export const Title = styled.h1`
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 130%;
  z-index: 10;
  margin-bottom: 10px;

  color: #3e3e3e;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    font-size: 25px;
  }
`;

export const NameInput = styled.input`
  width: 400px;
  width: 100%;

  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 10px;
  z-index: 10;

  ::placeholder {
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;

    color: #2d2d2d;
  }
`;

export const EmailInput = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 10;
  ::placeholder {
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;

    color: #2d2d2d;
  }
`;

export const MessageInput = styled.textarea`
  width: 500px;
  max-width: 500px;
  margin-bottom: 10px;
  padding: 10px;
  max-height: 100px;
  z-index: 10;

  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background: #ffffff;
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;

  color: #2d2d2d;

  ::placeholder {
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;

    color: #2d2d2d;
  }

  @media (max-width: 660px) {
    max-width: 300px;
  }
  @media (max-width: 460px) {
    max-width: 200px;
  } ;
`;

export const Button = styled.button`
  width: 200px;
  border: none;
  color: #fff;
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  z-index: 10;

  background: #fad34f;
  border-radius: 500px;
  padding: 20px;
`;
