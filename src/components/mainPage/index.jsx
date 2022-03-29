import React from 'react';
import styled from 'styled-components';

import Footer from '../footer';
import Form from '../form/index';
import backgroundMap from '../../assets/backgroundMap.svg';

export default function MainPage() {
  return (
    <>
      <Wrapper>
        <div className={'background_image'}>
          <img alt='map' src={backgroundMap} />
        </div>
        <Container>
          <DivLeft>
            <Form />
          </DivLeft>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 130px;
  .background_image {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    @media (max-width: 900px) {
      top: -10%;
      right: 0px;
      width: 70%;
      height: 70%;
      left: auto;
      bottom: auto;
    }
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      position: relative;
      height: 100%;
      width: 100%;
    }
    img {
      width: 100%;

      @media (max-width: 768px) {
        height: 100%;
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  @media (max-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const DivLeft = styled.div`
  display: flex;
  align-items: center;
`;
