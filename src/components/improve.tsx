import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice, minDevice} from '../styles';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  margin: 0 200px 40px 200px;
  @media ${maxDevice.tablet} {
    margin: 0 20px 40px 20px;
  }
`;

const Block = SC.div`
  @media ${minDevice.laptop} {
    width: 90%;
  }
`;

const Title = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 92px;
  line-height: 100%;
  @media ${maxDevice.laptop} {
    text-align: center;
    font-size: 45px;
  }
  @media ${maxDevice.tablet} {
    text-align: center;
    font-size: 36px;
  }
  @media ${maxDevice.mobileL} {
    text-align: center;
    font-size: 34px;
  }
`;

const SubTitle = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 400;
  font-size: 92px;
  line-height: 100%;
  text-align: right;
  margin-bottom: 30px;
  @media ${maxDevice.laptop} {
    text-align: center;
    font-size: 45px;
  }
  @media ${maxDevice.tablet} {
    text-align: center;
    font-size: 36px;
  }
  @media ${maxDevice.mobileL} {
    text-align: center;
    font-size: 34px;
  }
`;

const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media ${maxDevice.laptop} {
    font-size: 18px;
  }
  @media ${maxDevice.tablet} {
    font-size: 17px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 16px;
  }
`;

const Bg = SC.div`
  background-image: url("/images/png/improve.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  margin: auto;
  width: 320px;
  height: 320px;
  @media ${maxDevice.laptop} {
    background-position: center;
    width: 260px;
    height: 260px;
  }
  @media ${maxDevice.tablet} {
    background-position: center;
    width: 260px;
    height: 260px;
  }
  @media ${maxDevice.mobileL} {
    background-position: center;
    width: 260px;
    height: 260px;
  }
`;

export const Improve = props => {
  const {t} = useTranslation('common');

  return (
    <Element name="improve">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Block>
              <Title>Develop and improve</Title>
              <SubTitle>every day</SubTitle>
            </Block>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Block>
              <Text>
                Based on the most advanced science, Saсrill creates the most effective programs for personal and professional development. Join our platform and be part of the development and improvement of people.
              </Text>
            </Block>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Bg />
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
};
