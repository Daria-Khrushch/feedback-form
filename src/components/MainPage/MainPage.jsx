import React from 'react';
import MainPageContainer from './MainPageContainer';
import Form from 'components/Form/Form';
import { MainContainer } from './MainPage.styled';

const MainPage = () => {
  return (
    <MainContainer>
      <Form />
      <MainPageContainer />
    </MainContainer>
  );
};

export default MainPage;
