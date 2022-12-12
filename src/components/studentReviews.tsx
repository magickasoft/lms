import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {Rating} from './rating';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 120px 160px;
  @media ${maxDevice.tablet} {
    padding: 40px 0;
  }
`;

const CenterBlock = SC.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
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

const NormalTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  padding: 0 130px;
  margin-bottom: 60px;

  @media ${maxDevice.tablet} {
    padding: 0;
  }
`;

const FeedbackRow = SC.div`
  display: flex;
  align-items: center;
`;

const StudentFeedbackText = SC.div`
  font-family: 'SF Pro Display Regular Italic';
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: left;
  color: #333333;
  margin-bottom: 30px;
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
const UserTitle = SC.div`
  font-family: 'SF Pro Display';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #333333;
  opacity: 0.5;
`;
const Item = SC.div`
  min-height: 40vh;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 40px;
  margin: 20px;
  @media ${maxDevice.tablet} {
    margin: 10px 10px;
  }
`;

const RatingTitle = SC.div`
  text-align: left;
  margin-top: 0px;
  margin-bottom: 20px;
  
`;

const data = [
  {
    instagram: '@dBarnes · 7 March 2022',
    faadback:
      'A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!',
    src: '/images/student_reviews_1.png',
    name: 'Tara Brangston',
    label: 'Online entrepreneur',
  },
  {
    instagram: '@Mikeeeee · 5 March 2022',
    faadback:
      'Now I feel my inner power After this program I does not feel my daily weakness without taking any pills and medications. This is unbelieveble!',
    src: '/images/student_reviews_2.png',
    name: 'Mike Thomson',
    label: 'Nutrition Coach',
  },
  {
    instagram: '@BrianAl · 9 April 2022',
    faadback:
      'Hello. Thank you so much for the course program!!! It was a pleasure, I liked everything very much!!! The result speaks better than any words!',
    src: '/images/student_reviews_3.png',
    name: 'Brian Alexander',
    label: 'Successful businessman',
  },
  {
    instagram: '@NicGray · 7 July 2022',
    faadback:
      "I've been doing it for 2 months, 3 times a week - the result is minus 8 cm in the waistline. Very cool result! Thank you for this useful course.",
    src: '/images/student_reviews_4.png',
    name: 'Nicole Gray',
    label: 'Novice disco dancer',
  },
];

export const StudentReviews = (props: any) => {
  const {t} = useTranslation('common');

  return (
    <Element name="StudentReviews">
      <Container>
        <CenterBlock>
          <BoldText>Student reviews</BoldText>
          <Title>about our courses</Title>

          <NormalTitle>All our students are delighted with the results and the work of online trainers</NormalTitle>

          <Grid container>
            {data.map(o => (
              <Grid key={o.name} item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Item>
                  <Rating stars={5} />
                  <RatingTitle>{o.instagram}</RatingTitle>
                  <StudentFeedbackText>{o.faadback}</StudentFeedbackText>
                  <FeedbackRow>
                    <Avatar>
                      <Image src={o.src} height={80} width={80} alt="Student review image" />
                    </Avatar>
                    <Info>
                      <UserName>{o.name}</UserName>
                      <UserTitle>{o.label}</UserTitle>
                    </Info>
                  </FeedbackRow>
                </Item>
              </Grid>
            ))}
          </Grid>
        </CenterBlock>
      </Container>
    </Element>
  );
};
