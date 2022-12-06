import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Button} from './Button/button';
import {WhiteButton} from './Button/whiteButton';
import {Text} from './common';
import {Icon} from './icon';
import {InputSearch} from './inputSearch';
import {LocaleSwitcher} from './localeSwitcher';
import {ScrollIndicator} from './scrollIndicator';
import {SearchForm} from './searchForm';

type ContainerProps = {
  active: boolean;
};
const Container = SC.header<ContainerProps>`
  font-family: ${ibmplexsans400.style.fontFamily};
  background: ${({active}) => (active ? '#ffffff05' : '#ffffff05')};
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 4.45rem;
  margin: 0 auto;
  padding: 0 140px;
  background-color: #FFFFFF;
  @media ${maxDevice.tablet} {
    padding: 0 30px;
    height: 3.5rem;
  }
`;

const SCIcon = SC(Icon)`
  background-color: #fff;
  border-radius: 50%;
  margin-left: 15px;
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

const Row = SC.div`
  display: flex;
  flex-direction: row;
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

const useScroll = () => {
  const [active, setActive] = React.useState(false);

  const onScroll = () => {
    setActive(window?.scrollY >= 400);
  };

  React.useEffect(() => {
    window?.addEventListener('scroll', onScroll);

    return () => window?.removeEventListener('scroll', onScroll);
  }, []);

  return [active];
};

export const Header: React.FC = props => {
  const [active] = useScroll();
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (phone = '') => {
    setLoading(true);
    try {
      // await contact({phone});
      // const data: any = {action: 'submit_form', category: 'contact_phone', label: phone};
      // event(data);
      // reachGoal('contact_phone');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {/* <ScrollIndicator /> */}
      <Container active={active}>
        <LeftSide>
          <Image src="/images/icons/logo.svg" alt="Sacrill Logo" width={136} height={30} />
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
            <LocaleSwitcher />
            <BlackButtons>Log In</BlackButtons>
            <WhiteButton>En</WhiteButton>
          </RightButtons>
        </RightSide>
        {/* <Row>
          <Label>
            <Link href="mailto:hello@sacrill.com">hello@sacrill.com</Link>
          </Label>
        </Row> */}
      </Container>
    </>
  );
};
