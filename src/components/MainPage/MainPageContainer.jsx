import React from 'react';
import {
  DecorImgOne,
  DecorImgTwo,
  DecorImgThree,
  DecorImgFour,
  DecorImgFive,
  DecorImgSix,
} from './MainPage.styled';
import yellowSmile from 'images/yellow-main-one.png';
import transparentImg from 'images/transparent-main.png';
import mapImg from 'images/map-main.png';
import yellowSmileTwo from 'images/yellow-main-two.png';
import pinkImg from 'images/pink-main.png';
import cloudImg from 'images/Cloud.png';

const MainPageContainer = () => {
  return (
    <>
      <DecorImgOne src={yellowSmile} alt="decor" />
      <DecorImgTwo src={transparentImg} alt="decor" />
      <DecorImgThree src={mapImg} alt="decor" />
      <DecorImgFour src={yellowSmileTwo} alt="decor" />
      <DecorImgFive src={pinkImg} alt="decor" />
      <DecorImgSix src={cloudImg} alt="decor" />
    </>
  );
};

export default MainPageContainer;
