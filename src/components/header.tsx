import SC from '@emotion/styled';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Button} from './Button/button';
import {WhiteButton} from './Button/whiteButton';
import {Icon} from './icon';
import {LocaleSwitcher} from './localeSwitcher';
import {ScrollIndicator} from './scrollIndicator';
import {SearchForm} from './searchForm';

const Container = SC.header`
  font-family: ${ibmplexsans400.style.fontFamily};
  background: #ffffff05;
  z-index: 9998;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 200px;
  height: 76px;
  background-color: #FFFFFF;
  @media ${maxDevice.tablet} {
    padding: 0 20px;
  }
`;

const Label = SC.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // flex-direction: column;
  @media ${maxDevice.tablet} {
    display: none
  }
`;

const Link = SC.a`
  font-size: 0.9rem;
  line-height: 1.125rem;
  background: #000;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: #333333;
  // background: linear-gradient(90deg,#fe00dd -56.25%,#fd0009 135.94%);
  -webkit-background-clip: text;
`;

const LeftSide = SC.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 60px
`;
const RightSide = SC.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLinks = SC.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;
`;
const Search = SC.div`
  max-width: 307px;
  width: 100%;
`;
const RightButtons = SC.div``;
const BlackButtons = SC(Button)`
  margin-right: 10px;
`;

export const Header = () => {
  return (
    <>
      <ScrollIndicator />
      <Container>
        <LeftSide>
          <Icon name="logo" width={136} height={30} />
          <HeaderLinks>
            <Label>
              <Link href="#">Categories</Link>
              <Link href="#">Join Sacrill Club community</Link>
              <Link href="#">Support</Link>
              <Link href="#">Teach on Sacrill</Link>
            </Label>
          </HeaderLinks>
        </LeftSide>
        <RightSide>
          <Search>
            <SearchForm />
          </Search>
          <RightButtons>
            <BlackButtons>Log In</BlackButtons>
            <LocaleSwitcher />
          </RightButtons>
        </RightSide>
      </Container>
    </>
  );
};
