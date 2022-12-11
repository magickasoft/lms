import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {GreenButton} from './Button/greenButton';
import {CustomSlider} from './customSlider';
import {Icon} from './icon';
import {Rating} from './rating';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  // padding: 23vh 140px 0 140px;
  padding: 23vh 200px;
  @media ${maxDevice.tablet} {
    padding: 2vh 30px 0 30px;
  }
`;

const JoinSacrillBlock = SC.div`
  margin-bottom: 120px;
`;

const IntroSection = SC.section`
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

const HowSacrillWorks = SC.div`
  margin-bottom: 120px;
`;

const SuccessStories = SC.div`
  margin-bottom: 120px;
`;

const WhatStudentSay = SC.div`
  margin-bottom: 120px;
`;

const StudentReviews = SC.div`
  margin-bottom: 120px;
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

const HowWorksTitle = SC.div`
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

const SubSpan = SC.span`
  font-family: 'Bebas Neue Bold';
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

const HowWorksItems = SC.div`
  display: flex;
  justify-content: space-between;

  @media ${maxDevice.tablet} {
    flex-direction: column;
  }
`;
const HWSection = SC.div`
  margin-right: 40px;
  
  @media ${maxDevice.tablet} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const HWFeedback = SC.div`
  height: 376px;
  width: 360px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 30px;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`;
const FeedbackRow = SC.div`
  display: flex;
  align-items: center;
`;

const FeedbackBlock = SC.div`
  height: 70%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const FeedbackText = SC.div`
  font-family: 'SF Pro Display Regular Italic';
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: left;
  color: #333333;
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
const HWItem = SC.div`
  width: 360px;
  height: 385px;

  background: #F5F5F5;
  border: 1px solid #E5E5E5;
  border-radius: 12px;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`;
const ItemTop = SC.div`
  width: 360px;
  height: 220px;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`;
const Image1 = SC.div`
  background-image: url('images/how_sacrill_works_1.png');
  height: 100%;
`;
const Image2 = SC.div`
  background-image: url('images/how_sacrill_works_2.png');
  height: 100%;
`;
const Image3 = SC.div`
  background-image: url('images/how_sacrill_works_3.png');
  height: 100%;
`;
const ItemBottom = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: left;
  color: #333333;
  padding: 30px;
`;
const ItemTitle = SC.div`
  font-family: 'SF Pro Display Bold';
  font-weight: 700;
  font-size: 28px;
  text-align: left;
  margin-bottom: 10px;
`;
const ItemDescription = SC.div``;
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
const Item = SC.div`
  width: 500px;
  height: 384px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 40px;
`;

const RatingTitle = SC.div`
  text-align: left;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const defaultResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const defaultPhotoResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
];

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

export const Intro = (props: any) => {
  const photos = [...Array(10)].map((key: number, index: number) => {
    return (
      <Image key={index} src={'/images/slider_' + (index + 1) + '.png'} height={250} width={180} alt="Trainer image" />
    );
  });

  return (
    <Element name="intro">
      <IntroSection>
        <Container>
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

          <HowSacrillWorks>
            <CenterBlock>
              <HowWorksTitle>
                How <SubSpan>Sacrill works</SubSpan>
              </HowWorksTitle>

              <HowWorksItems>
                <HWSection>
                  <HWItem>
                    <ItemTop>
                      <Image1></Image1>
                    </ItemTop>
                    <ItemBottom>
                      <ItemTitle>Learn</ItemTitle>
                      <ItemDescription>Level up your life with the world’s best trainers & programs</ItemDescription>
                    </ItemBottom>
                  </HWItem>
                  <HWFeedback>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/how_sacrill_works_sub_1.png'}
                          height={80}
                          width={80}
                          alt="How Sacrill works image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Helen Williams</UserName>
                        <UserTitle>Bank employee</UserTitle>
                      </Info>
                    </FeedbackRow>
                    <FeedbackBlock>
                      <FeedbackRow>
                        <FeedbackText>
                          I&apos;m participating on multiple Sacrill programs and integrated it easily into my daily
                          routine. It completely fall into my squedule. I feel pumped up and limitless now!
                        </FeedbackText>
                      </FeedbackRow>

                      <FeedbackRow>
                        <Rating stars={5} />
                      </FeedbackRow>
                    </FeedbackBlock>
                  </HWFeedback>
                </HWSection>

                <HWSection>
                  <HWItem>
                    <ItemTop>
                      <Image2></Image2>
                    </ItemTop>
                    <ItemBottom>
                      <ItemTitle>Connect</ItemTitle>
                      <ItemDescription>Be part of a supporting community</ItemDescription>
                    </ItemBottom>
                  </HWItem>
                  <HWFeedback>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/how_sacrill_works_sub_2.png'}
                          height={80}
                          width={80}
                          alt="How Sacrill works image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Mike Tombler</UserName>
                        <UserTitle>Technology Engineer</UserTitle>
                      </Info>
                    </FeedbackRow>
                    <FeedbackBlock>
                      <FeedbackRow>
                        <FeedbackText>
                          Sacrill brings together like-minded individuals to inspire each other with their daily
                          transformations
                        </FeedbackText>
                      </FeedbackRow>

                      <FeedbackRow>
                        <Rating stars={5} />
                      </FeedbackRow>
                    </FeedbackBlock>
                  </HWFeedback>
                </HWSection>

                <HWSection>
                  <HWItem>
                    <ItemTop>
                    <Image3></Image3>
                    </ItemTop>
                    <ItemBottom>
                      <ItemTitle>Get result</ItemTitle>
                      <ItemDescription>
                        Get results that last a lifetime. Your transformation begins here.
                      </ItemDescription>
                    </ItemBottom>
                  </HWItem>
                  <HWFeedback>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/how_sacrill_works_sub_3.png'}
                          height={80}
                          width={80}
                          alt="How Sacrill works image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Tara Brangston</UserName>
                        <UserTitle>Online entrepreneur</UserTitle>
                      </Info>
                    </FeedbackRow>
                    <FeedbackBlock>
                      <FeedbackRow>
                        <FeedbackText>
                          Great materials Sacrill international community is a combination that caused a mind shift,
                          helped me understand who I am. I finally started my online business and it is going well!
                        </FeedbackText>
                      </FeedbackRow>

                      <FeedbackRow>
                        <Rating stars={5} />
                      </FeedbackRow>
                    </FeedbackBlock>
                  </HWFeedback>
                </HWSection>
              </HowWorksItems>
            </CenterBlock>
          </HowSacrillWorks>

          <SuccessStories>
            <CenterBlock>
              <Title>
                <SubSpan>176,405</SubSpan> success stories
              </Title>
              <NormalTitle>
                Sacrill constantly doing student feedback loops to ensure that our products not only enjoyable to get
                through, but transform the life of our learners and help to get the bright future.
              </NormalTitle>

              <CustomSlider withControls={false} autoplay={false} centerMode={false} responsive={defaultPhotoResponsive}>
                {photos}
              </CustomSlider>
            </CenterBlock>
          </SuccessStories>

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

          <StudentReviews>
            <CenterBlock>
              <BoldText>Student reviews</BoldText>
              <Title>about our courses</Title>

              <NormalTitle>All our students are delighted with the results and the work of online trainers</NormalTitle>

              <Grid container rowSpacing={4} columnSpacing={{xs: 0, sm: 0, md: 0}}>
                <Grid item xs={6}>
                  <Item>
                    <Rating stars={5} />
                    <RatingTitle>@dBarnes · 7 March 2022</RatingTitle>
                    <StudentFeedbackText>
                      A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world
                      in its best light! Developing motor skills-we develop acute and quick problem solving! Great!
                      Thanks!
                    </StudentFeedbackText>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/student_reviews_1.png'}
                          height={80}
                          width={80}
                          alt="Student review image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Tara Brangston</UserName>
                        <UserTitle>Online entrepreneur</UserTitle>
                      </Info>
                    </FeedbackRow>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Rating stars={5} />
                    <RatingTitle>@Mikeeeee · 5 March 2022</RatingTitle>
                    <StudentFeedbackText>
                      Now I feel my inner power After this program I does not feel my daily weakness without taking any
                      pills and medications. This is unbelieveble!
                    </StudentFeedbackText>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/student_reviews_2.png'}
                          height={80}
                          width={80}
                          alt="Student review image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Mike Thomson</UserName>
                        <UserTitle>Nutrition Coach</UserTitle>
                      </Info>
                    </FeedbackRow>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Rating stars={4} />
                    <RatingTitle>@BrianAl · 9 April 2022</RatingTitle>
                    <StudentFeedbackText>
                      Hello. Thank you so much for the course program!!! It was a pleasure, I liked everything very
                      much!!! The result speaks better than any words!
                    </StudentFeedbackText>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/student_reviews_3.png'}
                          height={80}
                          width={80}
                          alt="Student review image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Brian Alexander</UserName>
                        <UserTitle>Successful businessman</UserTitle>
                      </Info>
                    </FeedbackRow>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Rating stars={5} />
                    <RatingTitle>@NicGray · 7 July 2022</RatingTitle>
                    <StudentFeedbackText>
                      I&apos;ve been doing it for 2 months, 3 times a week - the result is minus 8 cm in the waistline.
                      Very cool result! Thank you for this useful course.
                    </StudentFeedbackText>
                    <FeedbackRow>
                      <Avatar>
                        <Image
                          src={'/images/student_reviews_4.png'}
                          height={80}
                          width={80}
                          alt="Student review image"
                        />
                      </Avatar>
                      <Info>
                        <UserName>Nicole Gray</UserName>
                        <UserTitle>Novice disco dancer</UserTitle>
                      </Info>
                    </FeedbackRow>
                  </Item>
                </Grid>
              </Grid>
            </CenterBlock>
          </StudentReviews>
        </Container>
      </IntroSection>
    </Element>
  );
};
