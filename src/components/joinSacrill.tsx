import SC from '@emotion/styled';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Element } from 'react-scroll';

import { maxDevice } from '../styles';
import { GreenButton } from './Button/greenButton';

const JoinSacrillBlock = SC.div`
  margin-bottom: 120px;
`;
const BoldText = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 92px;
  line-height: 100%;

  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
`;
const RightTitle = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  text-align: right;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
`;
const Row = SC.div`
  display: flex;
  margin-bottom: 60px;

  @media ${maxDevice.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: left;
  }
`;
const Column = SC.div`
  width: 50%;
  display: flex;
  
  @media ${maxDevice.tablet} {
    width: 100%;
    margin-bottom: 30px;
  }
`;
const ButtonBlock = SC.div`
  display: flex;
  align-items: center;
`;
const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 75%;

  @media ${maxDevice.tablet} {
    max-width: 100%;
  }
`;
const Pluses = SC.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${maxDevice.tablet} {
    flex-direction: column;
  }
`;
const PlusItem = SC.div`
  width: 245px;
  height: 276px;
  padding: 30px;
  // border: 1px solid gray;
  background-color: #FFFFFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  
  @media ${maxDevice.tablet} {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    flex-direction: row;
  }
`;
const IconImage = SC(Image)`
  margin-bottom: 40px;
`;
const SmallText = SC.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  @media ${maxDevice.tablet} {
    margin-left: 20px;
  }
`;

const JoinSacrillGradient = SC.div`
  padding: 0 200px;
  
  background-image: url('images/middle_gradient.png');
  background-repeat: no-repeat;
  background-position-y: -165px;
  
  @media ${maxDevice.tablet} {
    background-image: url('images/middle_gradient_second.png');
    background-repeat: revert;
    background-position-y: 0;
    background-position-x: 15px;
  }
`;

export const JoinSacrill = (props: any) => {
  const { t } = useTranslation('common');

  return (
    <Element name="JoinSacrill">
      <JoinSacrillGradient>
        <JoinSacrillBlock>
          <BoldText>Join Sacrill Club And Get Access</BoldText>
          <RightTitle>To All Courses In One Subscription</RightTitle>

          <Row>
            <Column>
              <ButtonBlock>
                <GreenButton>Join Sacrill Club</GreenButton>
              </ButtonBlock>
            </Column>
            <Column>
              <Text>
                Saсrill is an educational platform with video courses on relevant topics. We help clients find and
                purchase online courses from experts in their fields, and we help authors share their knowledge and
                expertise with a wider audience and get paid for their sales.
              </Text>
            </Column>
          </Row>

          <Row>
            <Pluses>
              <PlusItem>
                <IconImage src="/images/icons/typing.svg" height={46} width={46} alt="Typing image" />
                <SmallText>Chat with authors and other students</SmallText>
              </PlusItem>
              <PlusItem>
                <IconImage src="/images/icons/brain.svg" height={46} width={46} alt="Brain image" />
                <SmallText>
                  Self-development courses, health, sports, relationships, dance and other categories
                </SmallText>
              </PlusItem>
              <PlusItem>
                <IconImage src="/images/icons/thumbup.svg" height={46} width={46} alt="Thumb up image" />
                <SmallText>10+ new courses published each month</SmallText>
              </PlusItem>
              <PlusItem>
                <IconImage src="/images/icons/girl_notebook.svg" height={46} width={46} alt="Typing image" />
                <SmallText>Audio and video tutorials</SmallText>
              </PlusItem>
            </Pluses>
          </Row>
        </JoinSacrillBlock>
      </JoinSacrillGradient>
    </Element>
  );
};
