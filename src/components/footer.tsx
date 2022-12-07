import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import React from 'react';

// import {Link} from 'react-scroll';
import {ibmplexsans400, maxDevice, minDevice} from '../styles';
import {Button} from './Button/button';
import {WhiteButton} from './Button/whiteButton';
import {Icon} from './icon';

const Container = SC.footer`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 0 140px 0.75rem 140px;
  @media ${maxDevice.tablet} {
    padding: 0 20px 90px 20px;
  }
`;

const Copyright = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
`;

const A = SC.a`
  text-transform: uppercase;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 110%;
  color: #333333;
  margin-bottom: 40px;
  @media ${maxDevice.laptop} {
    font-size: 45px;
  }
  @media ${maxDevice.tablet} {
    font-size: 42px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 38px;
  }
`;

const ExternalLink = SC.a`
    margin-left: 7px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: right;
    text-decoration-line: underline;
    color: #808080;
`;

const Support = SC.div`
  text-align: end;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  margin-bottom: 20px;
  @media ${maxDevice.laptop} {
    text-align: start;
  }
  @media ${maxDevice.tablet} {
    text-align: start;
  }
  @media ${maxDevice.mobileL} {
    text-align: start;
  }
`;

const Email = SC.div`
  text-align: end;
  margin-bottom: 20px;
  @media ${maxDevice.laptop} {
    text-align: start;
  }
  @media ${maxDevice.tablet} {
    text-align: start;
  }
  @media ${maxDevice.mobileL} {
    text-align: start;
  }
`;

const BlackButtons = SC(Button)`
  margin-left: 10px;
  margin-top: 10px;
`;
const WhiteButtons = SC(WhiteButton)`
  margin-left: 10px;
  margin-top: 10px;
`;

const Actions = SC.div`
  text-align: end;
  @media ${maxDevice.laptop} {
    text-align: start;
  }
  @media ${maxDevice.tablet} {
    text-align: start;
  }
  @media ${maxDevice.mobileL} {
    text-align: start;
  }
`;

const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  margin: 30px 0;
`;

const IconImage = SC(Image)`
  margin-left: 7px;
`;

const Label = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 20px;
`;

const LabelLink = SC.a`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  margin-bottom: 10px;
`;

export const Footer = () => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container spacing={3.5}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Icon name="logo" width={136} height={30} />
              <Text>
                At Sacrill, expert practitioners in their fields share their expertise in online video courses at
                reasonable prices.
              </Text>
              <IconImage src="/images/icons/visa.svg" height={46} width={76} alt="visa" />
              <IconImage src="/images/icons/stripe.svg" height={46} width={53} alt="stripe" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Label>Collections</Label>
              <div>
                <LabelLink href="#">Featured on Sacrill</LabelLink>
              </div>
              <div>
                <LabelLink href="#">New courses</LabelLink>
              </div>
              <div>
                <LabelLink href="#">High rating</LabelLink>
              </div>
              <div>
                <LabelLink href="#">{`Editor's Choice`}</LabelLink>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Label>Sacrill</Label>
              <div>
                <LabelLink href="#">Get access to all courses</LabelLink>
              </div>
              <div>
                <LabelLink href="#">Become a Sacrill Author</LabelLink>
              </div>
              <div>
                <LabelLink href="#">Referral program</LabelLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Support>Support service</Support>
          <Email>
            <A href="mailto:hello@sacrill.com">hello@sacrill.com</A>
          </Email>
          <Actions>
            <BlackButtons>{t('logIn')}</BlackButtons>
            <WhiteButtons>Sign In for Authors</WhiteButtons>
          </Actions>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={2.5}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
          <Copyright>
            © {new Date().getFullYear()} Bon Digital Pte. Ltd. 68 Circular Road, #02-01, 049422, Singapore.
          </Copyright>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <Actions>
            <ExternalLink target="_blank" href="https://test1.ru">
              Contract Offer
            </ExternalLink>
            <ExternalLink target="_blank" href="https://test2.ru">
              Privacy Policy
            </ExternalLink>
            <ExternalLink target="_blank" href="https://test3.ru">
              User Agreement
            </ExternalLink>
          </Actions>
        </Grid>
      </Grid>
    </Container>
  );
};
