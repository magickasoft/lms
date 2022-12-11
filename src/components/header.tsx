import SC from '@emotion/styled';
import {Spin as Hamburger} from 'hamburger-react';
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
  margin: 0 auto 64px;
  padding: 0 200px;
  height: 76px;
  @media ${maxDevice.tablet} {
    padding: 0 20px;
  }

  @media ${maxDevice.laptopM} {
    padding: 0 100px;
  }

  @media (max-width: 1130px) {
    padding: 0 40px;
  }
  @media (max-width: 712px) {
    padding: 0 20px;
  }
`;

const Label = SC.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1230px) {
    display: none;
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
  margin-right: 60px;

  @media (max-width: 910px) {
    width: 30%;
  }
`;
const RightSide = SC.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 910px) {
    width: 70%;
  }
  @media (max-width: 712px) {
    justify-content: end;
  }
`;
const HeaderLinks = SC.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;

  @media (max-width: 1230px) {
    justify-content: end;
  }
  @media (max-width: 910px) {
    width: 30%;
  }
`;
const Search = SC.div`
  max-width: 307px;
  width: 100%;

  @media (max-width: 712px) {
    display: none;
  }
`;
const RightButtons = SC.div``;
const BlackButtons = SC(Button)`
  margin-right: 10px;
`;
const HeaderLogo = SC.div`
  margin-top: 9px;
  
  @media (max-width: 712px) {
    margin-top: 0;
  }
`;

const HamburgerMenu = SC.div`
  display: none;
  text-align: right;
  
  @media (max-width: 1230px) {
    display: block;
  }
  @media (max-width: 712px) {
    display: none;
  }
`;

const HamburgerRightMenu = SC.div`
  display: none;
  text-align: right;
  
  @media (max-width: 712px) {
    display: block;
  }
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
  const [isOpen, setOpen] = React.useState(false);
  const {t} = useTranslation('common');
  return (
    <>
      <Container>
        <LeftSide>
          <HeaderLogo>
            <Icon name="logo" width={136} height={30} />
          </HeaderLogo>
          <HeaderLinks>
            <HamburgerMenu>
              <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
            </HamburgerMenu>
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
          <HamburgerRightMenu>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </HamburgerRightMenu>
        </RightSide>
      </Container>
    </>
  );
};
