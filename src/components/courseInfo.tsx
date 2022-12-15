import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';
import { useGlobalContext } from 'src/pages/[slug]';

const Container = SC.div`
  width: 950px;
`;
const VideoPlayer = SC.div`
  background-image: url('/images/course_video_template.png');
  background-repeat: no-repeat;
  background-size: 950px;
  width: 950px;
  height: 500px;
  border-radius: 12px;
  margin-bottom: 40px;
  `;
const CourseBigTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 110%;
  color: #333333;
  margin-bottom: 30px;
`;
const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
`;
const CourseExcerpt = SC.div`
  margin-bottom: 30px;
`;
const CourseUpdateAt = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #333333;
  margin-bottom: 60px;
  display: flex;
`;
const ImageClock = SC(Image)`
  margin-right: 14px;
`;


export const CourseInfo = () => {
    const { course } = useGlobalContext()
    
    return (
        <Element name="courseInfo">
            <Container>
                <VideoPlayer></VideoPlayer>
                <CourseBigTitle>{course.title}</CourseBigTitle>
                <CourseExcerpt><Text>{course.excerpt}</Text></CourseExcerpt>
                <CourseUpdateAt>
                  <ImageClock src={'/images/clock.png'} width={33} height={33} alt="Clock image" />
                  <Text>Updated: May 2022</Text>
                </CourseUpdateAt>
                <CourseBigTitle>Are you ready to keep your mind always sharp and young?</CourseBigTitle>
                <Text>
                If so, Brain Biohacking is the course for you. This course is for those who want:
To keep the mind always sharp and young.
Have a perfect memory.
Easy to learn languages, memorize a large amount of information.
Avoid age-related diseases such as Alzheimer&apos;s or Parkinson&apos;s disease.
Freely memorize dates, phone numbers, numbers, important events.
It is easy to prepare and pass tests and exams for the highest score.
Be cheerful and energetic, increase your efficiency.
Cope more effectively with tasks at work and at home.
Learn to easily analyze information, situations.
Develop creativity and a non-standard approach to solving various issues.
                </Text>
            </Container>
        </Element>
    )
}

