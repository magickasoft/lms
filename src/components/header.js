import React from 'react';
import SC from '@emotion/styled';
import {Icon} from './icon';
import {Text} from './common';
import {maxDevice, theme} from '../styles';

const Container = SC.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({active}) => (active ? '#000000' : '#00000038')};
`;

const Line1 = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    margin: 0 30px 0 30px;
  }
  @media ${maxDevice.mobileL} {
    margin: 0 30px 0 30px;
  }
`;

const SCIcon = SC(Icon)`
  margin-right: 7px;
`;

const Label = SC.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  align-items: center;
  @media ${maxDevice.tablet} {
    display: none
  }
`;

const Row = SC.div`
  display: flex;
  flex-direction: row;
`;

export const Header = props => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window?.scrollY >= 400) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Container active={active}>
      <Line1>
        <Text color={theme.colors.White}>
          <strong>landing</strong> page
        </Text>
        <Row>
          <Label>
            <SCIcon name="call" size={20} />
            <a href="tel://+79537647035">Admin</a>
          </Label>
        </Row>
      </Line1>
    </Container>
  );
};
