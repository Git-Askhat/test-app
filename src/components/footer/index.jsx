import React from 'react';
import styled from 'styled-components';

import SvgFooter from '../../assets/footer';
import SvgLinked from '../../assets/linked';
import SvgTwitter from '../../assets/twitter';
import SvgFacebook from '../../assets/facebook';
import SvgPinterest from '../../assets/pinterest';
import SvgLeftBaloon from '../../assets/leftBaloon';
import SvgUpBaloon from '../../assets/upBaloon';
import RightBaloon from '../../assets/rightBaloon.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <Media>
        <SvgLinked />
        <SvgTwitter />
        <SvgFacebook />
        <SvgPinterest />
      </Media>
      <SvgLeftBaloon className='leftBaloon' />
      <SvgUpBaloon className='upBaloon' />
      <img src={RightBaloon} alt='Baloon' className='rightBaloon' />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 200px;
  background: #fafafa;
  border-top: 1px solid #d8d8d8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;

  .leftBaloon {
    position: absolute;
    bottom: 0;

    @media (max-width: 1333px) {
      transform: scale(0.8);
      bottom: -30px;
      left: -30px;
    }

    @media (max-width: 720px) {
      transform: scale(0.7);
      bottom: -50px;
      left: -50px;
    }
  }

  .upBaloon {
    position: absolute;
    top: 0;
    right: 15%;
  }

  .rightBaloon {
    position: absolute;
    right: 0;
  }
`;

const Media = styled.div`
  width: 126px;
  margin-left: 25%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 1000px) {
    margin-left: 50%;
  }
  @media (max-width: 680px) {
    margin-left: 35%;
  }
`;

const DivLeft = styled.div`
  display: flex;
`;
