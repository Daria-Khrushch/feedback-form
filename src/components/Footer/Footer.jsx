import React from 'react';
import FooterDecor from './FooterDecor';
import { FooterContainer, Icons } from './Footer.styled';
import linkedinIcon from 'images/linkedin.png';
import tweeterIcon from 'images/tweeter.png';
import facebookIcon from 'images/facebook.png';
import pinterestIcon from 'images/pinerest.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Icons>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
          <img src={linkedinIcon} alt="icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
          <img src={tweeterIcon} alt="icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
          <img src={facebookIcon} alt="icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://pinterest.com">
          <img src={pinterestIcon} alt="icon" />
        </a>
      </Icons>
      <FooterDecor />
    </FooterContainer>
  );
};

export default Footer;
