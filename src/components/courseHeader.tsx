import SC from '@emotion/styled';
import {Spin as Hamburger} from 'hamburger-react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import React, { use } from 'react';
import { useGlobalContext } from 'src/pages/[slug]';

import {maxDevice} from '../styles';
import {Button} from './Button/button';

const Container = SC.header`
  background: #ffffff05;
  z-index: 9998;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 140px;
  height: 160px;

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
const LinkHref = SC(Link)`
  font-size: 0.9rem;
  line-height: 1.125rem;
  background: #000;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  -webkit-background-clip: text;
  cursor: pointer;
  margin-right: 30px;
`;
const LoginButton = SC.div`
  margin-right: 20px;
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
  justify-content: end;

  @media (max-width: 910px) {
    width: 70%;
  }
  @media (max-width: 712px) {
    justify-content: end;
  }
`;
const RightButtons = SC.div`
  display: flex;
  align-items: center;
`;
const BlackButtons = SC(Button)`
  margin-right: 10px;
`;
const HeaderLogo = SC.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 712px) {
    margin-top: 0;
  }
`;
const HamburgerRightMenu = SC.div`
  text-align: right;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  
  @media (max-width: 712px) {
    display: block;
  }
`;
const AuthorLink = SC(Link)`
  display: flex;
  align-items: center;
`;
const Author = SC.div`
`;
const AuthorName = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  font-size: 24px;
  color: #333333;
`;
const AuthorTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-size: 16px;
  color: #808080;
`;

export const CourseHeader = () => {
  const [isOpen, setOpen] = React.useState(false);
  const {t} = useTranslation('common');
  const {course} = useGlobalContext();
  const AuthorImage = SC.div`
    background-image: url('/images/author_image_tempate.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-right: 20px; 
  `;

  const authorName = JSON.parse(course.author_info).filter(info => info.name);

  return (
    <>
      <Container>
        <LeftSide>
          <HeaderLogo>
            <AuthorLink href='/'>
              <AuthorImage></AuthorImage>
              <Author>
                <AuthorName>{authorName[0].name}</AuthorName>
                <AuthorTitle>{authorName[0].about.substring(0, 50)}...</AuthorTitle>
              </Author>
            </AuthorLink>
          </HeaderLogo>
        </LeftSide>
        <RightSide>
          <RightButtons>
            <LinkHref href={'/support'}>
              Support
            </LinkHref>
            <LoginButton>
              <BlackButtons padding={'10px 20px'}>{t('logIn')}</BlackButtons>
            </LoginButton>
          </RightButtons>
          <HamburgerRightMenu>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </HamburgerRightMenu>
        </RightSide>
      </Container>
    </>
  );
};
