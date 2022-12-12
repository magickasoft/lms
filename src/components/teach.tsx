import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {Button} from './Button/button';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  margin: 0 130px 90px 130px;
  @media ${maxDevice.tablet} {
    margin: 0 10px 50px 10px;
  }
`;

const Layout = SC.div`
  padding-top: 55px;
`;

const Content = SC.div`
  background: #EEEDEA;
  border-radius: 12px;
  min-height: 630px;
  background: linear-gradient(-45deg, #d9ecf4, #d9eaf6, #e6efed, #EEEDEA);
  background-size: 150% 150%;
`;

const Left = SC.div`
  padding: 100px 90px 100px 90px;
  @media ${maxDevice.tablet} {
    padding: 40px 40px 40px 40px;
  }
`;

const Title = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 92px;
  line-height: 100%;
  display: flex;
  align-items: center;
  @media ${maxDevice.laptop} {
    font-size: 45px;
  }
  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
  @media ${maxDevice.mobileL} {
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
    font-size: 45px;
  }
  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
  @media ${maxDevice.mobileL} {
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
  margin-bottom: 60px;
  @media ${maxDevice.laptop} {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media ${maxDevice.tablet} {
    font-size: 17px;
    margin-bottom: 30px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const BlackButton = SC(Button)`
  min-width: 260px;
  height: 76px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  @media ${maxDevice.laptop} {
    font-size: 19px;
  }
  @media ${maxDevice.tablet} {
    font-size: 19px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 18px;
  }
`;

const Bg = SC.div`
  background-image: url("/images/png/teach.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 100%;
  min-height: 793px;
  @media ${maxDevice.laptop} {
    background-position: center;
    min-height: 350px;
  }
  @media ${maxDevice.tablet} {
    background-position: center;
    min-height: 350px;
  }
  @media ${maxDevice.mobileL} {
    background-position: center;
    min-height: 300px;
  }
`;

const Icon = SC.div`
  background-image: url("/images/icons/teach.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
  margin-left: 14px;
  @media ${maxDevice.laptop} {
    margin-left: 7px;
    width: 40px;
    height: 40px;
  }
  @media ${maxDevice.tablet} {
    margin-left: 7px;
    width: 35px;
    height: 35px;
  }
  @media ${maxDevice.mobileL} {
    margin-left: 7px;
    width: 30px;
    height: 30px;
  }
`;

export const Teach = props => {
  const {t} = useTranslation('common');

  return (
    <Element name="Teach">
      <Container>
        <Layout>
          <Content>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Left>
                  <Title>
                    Publish Courses <Icon />
                  </Title>
                  <SubTitle>on Sacrill for Free</SubTitle>
                  <Text>Be part of the community and help members develop themselves</Text>
                  <BlackButton>Teach on Sacrill</BlackButton>
                </Left>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Bg />
              </Grid>
            </Grid>
          </Content>
        </Layout>
      </Container>
    </Element>
  );
};
