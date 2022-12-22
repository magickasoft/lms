import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import {LessonAccordion} from '../lessonAccordion';

const Container = SC.div`
  margin-top: 50px;
  margin-bottom: 60px;
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
const BoldText = SC.div`
  font-family: 'SF Pro Display Bold';
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
`;
const SmallVideoPlayer = SC.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const SmallVideoImage = SC(Image)`
  margin-right: 20px;
`;
const LessonsContainer = SC.div`
`;
const Desc = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;
const Divider = SC.div`
  margin: 5px 0;
  height: 1px;
  width: 100%;
  background: #777777;
  opacity: 0.2;
  min-width: 300px;
`;
const SectionItem = SC.div`
  margin-bottom: 30px;
`;

export const AcademicPlan = (props: any) => {
  const {sections, lessonsLength} = props;

  // sections && sections.map(section => (
  //     section.lessons.map(lesson => {
  //     })
  //   });

  return (
    <Container>
      <CourseBigTitle>Academic plan</CourseBigTitle>
      <Text>{lessonsLength} video lessons</Text>
      <SmallVideoPlayer>
        <SmallVideoImage src={'/images/lesson_video_template.png'} width={240} height={134} alt="Lesson image" />
        <SmallVideoImage src={'/images/lesson_video_template.png'} width={240} height={134} alt="Lesson image" />
        <SmallVideoImage src={'/images/lesson_video_template.png'} width={240} height={134} alt="Lesson image" />
      </SmallVideoPlayer>

      <LessonsContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {sections &&
              sections.map(section => {
                return (
                  <SectionItem key={section.id}>
                    <Text>
                      <BoldText>{section.title}</BoldText>
                    </Text>
                    {section.lessons.map(lesson => {
                      return (
                        <>
                          <LessonAccordion key={lesson.id} title={lesson.title}>
                            <Desc>{lesson.description}</Desc>
                          </LessonAccordion>
                        </>
                      );
                    })}
                  </SectionItem>
                );
              })}
          </Grid>
        </Grid>
      </LessonsContainer>
    </Container>
  );
};
