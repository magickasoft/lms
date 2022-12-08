import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice, minDevice} from '../styles';
import {GreenButton} from './Button/greenButton';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  background: linear-gradient(130.41deg, #F9E7FE 2.14%, #DAFCFC 101.31%);
  border-radius: 12px;
  margin: 0 0 40px 0;
  padding: 40px 20px 40px 20px;
  @media ${minDevice.laptop} {
    margin: 0 40px 100px 40px;
    padding: 100px 100px 100px 200px;
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
  margin-top: 10px;
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

const Icon = SC.div`
  background-image: url("/images/icons/club.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
  margin-right: 14px;
  @media ${maxDevice.laptop} {
    margin-right: 7px;
    width: 40px;
    height: 40px;
  }
  @media ${maxDevice.tablet} {
    margin-right: 7px;
    width: 35px;
    height: 35px;
  }
  @media ${maxDevice.mobileL} {
    margin-right: 7px;
    width: 30px;
    height: 30px;
  }
`;

const Title1 = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  display: flex;
  align-items: center;
  margin-top: 40px;
  @media ${maxDevice.laptop} {
    margin-top: 30px;
    font-size: 24px;
  }
  @media ${maxDevice.tablet} {
    margin-top: 30px;
    font-size: 22px;
  }
  @media ${maxDevice.mobileL} {
    margin-top: 30px;
    font-size: 20px;
  }
`;

const GreenBtn = SC(GreenButton)`
  margin-top: 50px;
  @media ${maxDevice.laptop} {
    margin-top: 30px;
  }
  @media ${maxDevice.tablet} {
    margin-top: 30px;
  }
  @media ${maxDevice.mobileL} {
    margin-top: 30px;
  }
`;

export const Club = props => {
  const {t} = useTranslation('common');

  return (
    <Element name="club">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Title>Join Sacrill Club Today</Title>
            <SubTitle>Get access to all courses for</SubTitle>
            <Title>less than $1 a day</Title>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Title1>
              <Icon /> Community
            </Title1>
            <Text>
              Chat with authors and other course participants on the mobile app.
            </Text>
            <Title1>
              <Icon /> Self-development courses
            </Title1>
            <Text>
              Self-development courses, health, sports, relationships, dance and other categories
            </Text>
            <Title1>
              <Icon /> New programs every month
            </Title1>
            <Text>
              Each month more than 10 new courses are published
            </Text>
            <Title1>
              <Icon /> Audio and video tutorials
            </Title1>
            <GreenBtn>Try sacrill club subscription</GreenBtn>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            [images]
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
};
