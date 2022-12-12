import SC from '@emotion/styled';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {maxDevice} from '../styles';

const Container = SC.div`
  padding: 0 200px;
`;
const WhatStudentSay = SC.div`
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
const ReviewBlock = SC.div`
  display: flex;
  position: relative;
  left: 245px;
  width: 1000%;

  @media ${maxDevice.tablet} {
    position: initial;
  }
`;
const ReviewSection = SC.div`
  width: 760px;
  height: 560px;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 60px;
  margin-right: 20px;
  border: 1px solid gray;

  @media ${maxDevice.tablet} {
    width: 100%;
    padding: 20px;
    max-width: 340px;
    height: 100%;
  }
`;
const TopItem = SC.div``;
const BottomItem = SC.div`
  margin-top: 20px;
`;
const FeedbackRow = SC.div`
  display: flex;
  align-items: center;
`;
const Avatar = SC.div`
  margin-right: 20px;
`;
const Info = SC.div`
  text-align: left;
`;
const UserName = SC.div`
  font-family: 'SF Pro Display Bold';
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #333333;
  margin-bottom: 10px;
`;

type ReviewProps = {
  avatar: string;
  name: string;
  feedback: string;
};

const reviews: ReviewProps[] = [
  {
    avatar: 'student_says_1.png',
    name: 'Linda',
    feedback:
      'The subscription to Sacrill has helped me to know what I really like, what topics are close and interesting and what is not worth wasting time on. It is an unlimited opportunity to learn for a small amount of money. I have always bought different online courses, but it often happened that the topic is interesting but the expert&apos;s presentation is boring and I quickly lost interest and left the course without getting the desired result. However, I can choose which author I feel more comfortable with, which topics I want to delve into, and which ones don&apos;t suit me at all. Sacrill is a great way to find a new hobby and get better every day. I definitely recommend it to those who want to improve themselves, their lives and strive to be a well-rounded and interesting person.',
  },
  {
    avatar: 'student_says_2.png',
    name: 'Marco',
    feedback:
      'The subscription to Sacrill has helped me to know what I really like, what topics are close and interesting and what is not worth wasting time on. It is an unlimited opportunity to learn for a small amount of money. I have always bought different online courses, but it often happened that the topic is interesting but the expert&apos;s presentation is boring and I quickly lost interest and left the course without getting the desired result. However, I can choose which author I feel more comfortable with, which topics I want to delve into, and which ones don&apos;t suit me at all. Sacrill is a great way to find a new hobby and get better every day. I definitely recommend it to those who want to improve themselves, their lives and strive to be a well-rounded and interesting person.',
  },
];

export const StudentSay = (props: any) => {
  const {t} = useTranslation('common');

  return (
    <Element name="StudentSay">
      <Container>
        <WhatStudentSay>
          <BoldText>What students say</BoldText>

          <RightTitle>
            about Sacrill club <Image src={'/images/heart.png'} height={80} width={80} alt="Heart image" />
          </RightTitle>

          <ReviewBlock>
            {reviews.map(review => {
              return (
                <ReviewSection key={review.name}>
                  <TopItem>
                    <FeedbackRow>
                      <Avatar>
                        <Image src={'/images/' + review.avatar} height={80} width={80} alt="Student image" />
                      </Avatar>
                      <Info>
                        <UserName>{review.name}</UserName>
                      </Info>
                    </FeedbackRow>
                  </TopItem>
                  <BottomItem>{review.feedback}</BottomItem>
                </ReviewSection>
              );
            })}
          </ReviewBlock>
        </WhatStudentSay>
      </Container>
    </Element>
  );
};
