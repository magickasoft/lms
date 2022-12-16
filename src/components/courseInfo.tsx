import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import {Element} from 'react-scroll';
import {useGlobalContext} from 'src/pages/[slug]';

import {GreenBox} from './courseSections/greenBox';
import {StudentFeedback} from './courseSections/studentFeedback';
import {UlList} from './courseSections/ulList';

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
const TextWithBr = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 10px;
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
const AcademicPlan = SC.div`
  margin-top: 50px;
`;

export const CourseInfo = () => {
  const {course} = useGlobalContext();

  return (
    <Element name="courseInfo">
      <Container>
        <VideoPlayer></VideoPlayer>

        <CourseBigTitle>{course.title}</CourseBigTitle>
        <CourseExcerpt>
          <Text>{course.excerpt}</Text>
        </CourseExcerpt>
        <CourseUpdateAt>
          <ImageClock src={'/images/clock.png'} width={33} height={33} alt="Clock image" />
          <Text>Updated: May 2022</Text>
        </CourseUpdateAt>

        <CourseBigTitle>Are you ready to keep your mind always sharp and young?</CourseBigTitle>
        <UlList />

        <StudentFeedback />

        <CourseBigTitle>
          Have you ever considered what it&apos;s like for your brain to wake up in the morning?
        </CourseBigTitle>
        <TextWithBr>
          Over the years, the productivity of the brain decreases, it degrades and begins to cope with its functions
          worse. It is more difficult for us to concentrate, to learn something new, memory deteriorates, and we begin
          to forget more and more.
        </TextWithBr>
        <TextWithBr>
          This is due to the fact that mitochondria are small &quot;energy stations&quot; of cells, over time they cease
          to cope with the negative influence of various factors, their quality deteriorates. And after 30, the number
          of mitochondria decreases by 2 times. As a result, the brain does not receive the energy it needs.
        </TextWithBr>
        <TextWithBr>
          That&apos;s why we get up in the morning broken, not rested, without strength and energy. We reach for sweets,
          we hardly remember something, we get annoyed at every trifle, we snap at our relatives and subordinates, we
          feel squeezed out like a lemon.
        </TextWithBr>

        <GreenBox {...course} />

        <StudentFeedback />

        <AcademicPlan>
          <CourseBigTitle>Academic plan</CourseBigTitle>
          <Text>17 video lessons</Text>
          {/* <SmallVideoPlayer>
            <Image src={'/images/lesson_video_template.png'} width={240} height={134} />
          </SmallVideoPlayer> */}
        </AcademicPlan>
      </Container>
    </Element>
  );
};
