import React from 'react';
import pinkImg from 'images/pink-footer.png';
import yellowImg from 'images/yellow-footer.png';
import greenImg from 'images/green-footer.png';
import { DecorImgOne, DecorImgThree, DecorImgTwo } from './Footer.styled';
const FooterDecor = () => {
  return (
    <>
      <DecorImgOne src={pinkImg} alt="decor" />
      <DecorImgTwo src={yellowImg} alt="decor" />
      <DecorImgThree src={greenImg} alt="decor" />
    </>
  );
};

export default FooterDecor;
