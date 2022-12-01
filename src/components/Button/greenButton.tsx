import {css} from '@emotion/react';
import SC from '@emotion/styled';
import React from 'react';

import {theme} from '../../styles';

const Container = SC.button`
  background: ${theme.colors.Green};
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 150%;
  padding: 20px 44px;
  border-radius: 1000px;
  transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
  color: ${theme.colors.White};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({disabled}) =>
    disabled &&
    css`
      color: #525b67;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
      cursor: default;
    `}
`;

export const GreenButton = ({children, ...props}) => <Container {...props}>{children}</Container>;
