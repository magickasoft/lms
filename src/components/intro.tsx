import SC from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {useGetCoursesQuery, useGetPopularCoursesQuery, useGetTopCoursesQuery} from '../../generated/graphql';
import {ibmplexsans400, maxDevice} from '../styles';
import {GreenButton} from './Button/greenButton';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  // padding: 23vh 140px 0 140px;
  padding: 23vh 260px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

const JoinSacrillBlock = SC.div`
  margin-bottom: 120px;
`;

const HowSacrillWorks = SC.div`

`;

const CenterBlock = SC.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 92px;
  line-height: 100%;
`;

const SubTitle = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  text-align: right;
  margin-bottom: 40px;
`;

const SubSpan = SC.span`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  text-align: right;
  margin-bottom: 40px;
`;

const BlackButton = SC(Button)`
  margin-right: 10px;
`;

const CoursesTab = SC.div`
  margin-bottom: 60px;
`;

const Row = SC.div`
  display: flex;
  margin-bottom: 60px;
`;

const Column = SC.div`
  width: 50%;
  display: flex;
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
`;

const Pluses = SC.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PlusItem = SC.div`
  width: 275px;
  height: 276px;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
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
`;

type CourseType = {
  type: string;
  title: string;
};

const courseTypes: CourseType[] = [
  {type: 'new', title: 'New classes'},
  {type: 'top', title: 'Top classes'},
  // {type: 'sale', title: 'Courses on sale'},
  {type: 'popular', title: 'Popular courses'},
];

export const Intro = (props: any) => {
  const [selectedType, setSelectedType] = useState('new')
  const courses = useGetCoursesQuery({variables: {}});
  const popularCourses = useGetPopularCoursesQuery({variables: {}});
  const topCourses = useGetTopCoursesQuery({variables: {}});

  const handleSelectType = (course: CourseType) => {
    setSelectedType(course.type)
  };

  useEffect(() => {
    console.log(selectedType)
  }, [selectedType]);

  let coursesItems = [];
  if(selectedType === 'new') {
    coursesItems = courses?.data?.getCourses?.map(course => <Course key={course.id.toString()} {...course} />)
  } else if(selectedType === 'popular') {
    coursesItems = popularCourses?.data?.getPopularCourses?.map(course => <Course key={course.id.toString()} {...course} />)
  } else if(selectedType === 'top') {
    coursesItems = topCourses?.data?.getTopCourses?.map(course => <Course key={course.id.toString()} {...course} />)
  }

  return (
    <Element name="intro">
      <section>
        <Container>
          <CoursesTab>
            {courseTypes.map((courseType, index) =>
              <WhiteButton 
                key={index}
                onClick={() => handleSelectType(courseType)}
                active={selectedType === courseType.type}
              >
                {courseType.title}
              </WhiteButton>
            )}
          </CoursesTab>
          <CoursesList>
            {coursesItems}
          </CoursesList>
          <JoinSacrillBlock>
            <Title>Join Sacrill Club And Get Access</Title>
            <SubTitle>To All Courses In One Subscription</SubTitle>

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
                <Title>How <SubSpan>Sacrill works</SubSpan></Title>

                
              </CenterBlock>
          </HowSacrillWorks>
        </Container>
      </section>
    </Element>
  );
};

