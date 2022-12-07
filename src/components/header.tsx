import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Button} from './Button/button';
import {Icon} from './icon';
import {LocaleSwitcher} from './localeSwitcher';
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
  padding: 0 260px;
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

const linksList = [
  {href: '#', label: 'categories'},
  {href: '#', label: 'joinSCC'},
  {href: '#', label: 'support'},
  {href: '#', label: 'teachSacrill'},
];

type LinkProps = {
  href?: string;
  label?: any;
};

export const Header = () => {
  const {t} = useTranslation('common');
  return (
    <>
      <Container>
        <LeftSide>
          <Icon name="logo" width={136} height={30} />
          <HeaderLinks>
            <Label>
              {linksList.map(({label, ...props}: LinkProps) => (
                <Link key={label} {...props}>
                  {t(label)}
                </Link>
              ))}
            </Label>
          </HeaderLinks>
        </LeftSide>
        <RightSide>
          <Search>
            <SearchForm />
          </Search>
          <RightButtons>
            <BlackButtons>{t('logIn')}</BlackButtons>
            <LocaleSwitcher />
          </RightButtons>
        </RightSide>
      </Container>
    </>
  );
};
