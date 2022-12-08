import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {Accordion} from './accordion';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  margin: 0 200px 40px 200px;
  @media ${maxDevice.tablet} {
    margin: 0 20px 40px 20px;
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

const Desc = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;

const Divider = SC.div`
  margin: 5px 0;
  height: 1px;
  width: 100%;
  background: #777777;
  opacity: 0.2;
  min-width: 300px;
`;

const data = [
  {
    title: 'How long do I have access to the course?',
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
  {
    title: 'When the course begins?',
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
  {
    title: 'How do I access the course?',
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
  {
    title: 'How to pay for the course?',
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
  {
    title: 'Can I buy a course as a gift?',
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
  {
    title: "If I don't like the course, can I get a refund?",
    desc: 'Unlimited time, whenever you want. You can take your time and take lessons when it suits you and at the most convenient time.',
  },
];

export const FAQ = props => {
  const {t} = useTranslation('common');

  return (
    <Element name="FAQ">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Title>FAQ</Title>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            {data.map(d => (
              <Accordion key={d.title} title={d.title}>
                <Desc>{d.desc}</Desc>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
};
