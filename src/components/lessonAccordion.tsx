import SC from '@emotion/styled';
import React from 'react';
import {animated, useSpring} from 'react-spring';

import {Icon} from './icon';

const Container = SC.div`
  position: relative;
  justify-content: space-between;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

const Title = SC.div`
  width: 100%;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  letter-spacing: 0.1em;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Header = SC.div`
  display: flex;
  align-items: center;
  // min-height: 51px;
  overflow: hidden;
  justify-content: space-between;
  cursor: pointer;
  margin: 20px 19px 20px 19px;
`;

const Content = SC.div`
  margin: 0 0 20px 20px;
  overflow: auto;
`;

const Arrow = SC.div`
  display: flex;
  margin: 0 0 0 20px;
`;

const contentAnimation = {
  false: {
    opacity: 0,
    transform: 'translateY(-20px)',
    delay: 30,
    maxHeight: '0px',
    display: 'none',
  },
  true: {
    maxHeight: '1000px',
    opacity: 1,
    transform: 'translateY(0)',
    delay: 0,
    display: 'block',
  },
};

const arrowAnimation = {
  false: {
    transform: 'rotatex(0deg)',
    delay: 30,
  },
  true: {
    transform: 'rotatex(-180deg)',
    delay: 0,
  },
};

type AccordionProps = {
  title: any;
  children?: any;
};

export const LessonAccordion = ({title, children}: AccordionProps) => {
  const [open, setOpen] = React.useState(false);
  // @ts-ignore
  const content = useSpring(contentAnimation[open]);
  // @ts-ignore
  const arrow = useSpring(arrowAnimation[open]);
  return (
    <Container>
      <Header onClick={() => setOpen(!open)}>
        <Title>{title}</Title>
        <animated.div style={arrow}>
          <Arrow>
            <Icon name="arrowDown" size="24" />
          </Arrow>
        </animated.div>
      </Header>
      <animated.div style={content}>
        <Content>{children}</Content>
      </animated.div>
    </Container>
  );
};
