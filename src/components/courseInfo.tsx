import SC from '@emotion/styled';
import {
  Box,
  Checkbox,
  Dialog,
  Divider,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  LinearProgressProps,
  Modal,
  TextField,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useGetTopCoursesQuery} from 'generated/graphql';
import Image from 'next/image';
import React from 'react';
import {Element} from 'react-scroll';
import {useGlobalContext} from 'src/pages/[slug]';
import {ibmplexsans400, maxDevice} from 'src/styles';

import {GreenButton} from './Button/greenButton';
import {Course} from './course';
import {AcademicPlan} from './courseSections/academicPlan';
import {GreenBox} from './courseSections/greenBox';
import {StudentFeedback} from './courseSections/studentFeedback';
import {UlList} from './courseSections/ulList';
import {CustomSlider} from './customSlider';
import {FAQ} from './faq';
import {GraySupportBlock} from './graySupportBlock';
import {Icon} from './icon';
import {MeetAuthor} from './meetAuthor';
import {Rating} from './rating';
import {RatingHorizontal} from './ratingHorizontal';
import {WhereClientsWorks} from './whereClientsWorks';

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
  padding-bottom: 50px;
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
const CourseText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
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
const LineDivider = SC(Divider)`
  margin-top: 40px;
  margin-bottom: 60px;
`;
const AfterPaymentBlock = SC.div`
  margin-bottom: 60px;
`;
const APItems = SC.div`

`;
const APItem = SC.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const APLeft = SC.div`
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 33px;
`;
const APRight = SC.div`

`;
const StudentRatingBlock = SC.div`
  margin-bottom: 30px;
`;
const TopCourses = SC.div`
  margin-top: 30px;
`;
const SpanText = SC.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  margin-left: 14px;
`;
const ProgressBars = SC.div``;
const ProgressBarItem = SC.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const PB = SC.div`
  width: 100%;
  padding-right: 28px;
`;
const PBRating = SC.div`
  margin-right: 12px;
`;
const PBPercentages = SC.div`
  width: 50px;
  text-align: right;
`;
const CategoriesContainer = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  padding: 0 0 60px 0;
  @media ${maxDevice.tablet} {
    padding: 0 20px 0 20px;
  }
`;
const PayModal1 = SC(Dialog)``;
const PayModal = SC(Modal)``;

const ModalContent = SC.div`
  width: 660px;
  background: #F5F5F5;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 40px;
`;

const defaultResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1205,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 375,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const CustomProgressBar = styled(LinearProgress)<LinearProgressProps>(({theme}) => ({
  height: 16,
  borderRadius: 12,
  backgroundColor: '#F5F5F5',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#73C371',
    borderRadius: 12,
  },
}));

const PayProgressBar = styled(LinearProgress)<LinearProgressProps>(({theme}) => ({
  marginTop: 30,
  height: 16,
  borderRadius: 12,
  backgroundColor: '#FFFFFF',
  '& .MuiLinearProgress-bar': {
    background: 'linear-gradient(90deg, #0FD850 80%, #F9F047 100%);',
    opacity: 0.6,
    borderRadius: 12,
  },
}));
const ProgressPercentages = SC.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 150%;
  color: #333333;
  position: relative;
  top: -24px;
  left: 430px;
  margin-bottom: 30px;
`;
const MainCourse = SC.div`
  display: flex;
  margin-bottom: 20px;
`;
const CourseDescription = SC.div``;
const CourseRating = SC.div``;
const CourseImage = SC.div`
  background-image: url('/images/course_thumb_small.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 200px;
  max-height: 105px;
  margin-right: 20px;
  height: 105px;
`;
const AdditionalCourse = SC.div`
  display: flex;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
`;
const CourseSmallText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;
const LaterLink = SC.div`
  text-decoration: underline;
  cursor: pointer;
`;
const AddToOrder = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  display: flex;
  justify-content: end;
`;
const checkboxStyle = {
  color: '#73C371',
  '&.Mui-checked': {
    color: '#73C371',
  },
};
const FormBlock = SC.div`
  margin-top: 20px;
`;
const TotalPrice = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  text-align: right;
  color: #333333;
  margin-bottom: 30px;
`;
const DiscountPrice = SC.span`
  color: #808080;
  text-decoration-line: line-through;
`;
const EmailIcon = SC(Icon)`
  position: relative;
  top: -40px;
  left: 20px;
`;
const CheckboxBlock = SC.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SmallText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: #808080;
`;
const BenefitsBlock = SC.div`
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 31px;
`;
const Title = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #333333;
`;
const Includes = SC.div`
  margin-top: 15px;
`;
const IncludeItem = SC.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
`;
const IncludeText = SC.div`
  margin-left: 15px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;

export const CourseInfo = () => {
  const {course, open, setOpen} = useGlobalContext();
  const {sections} = course;
  const lessonsLength = sections ? sections.reduce((acc, section) => acc + section.lessons.length, 0) : 0;
  const topCourses = useGetTopCoursesQuery({variables: {}});
  const normalise = value => ((value - 0) * 100) / (100 - 0);

  const coursesItems = topCourses?.data?.getTopCourses?.map(course => (
    <Course key={course.id.toString()} {...course} />
  ));

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

        <AcademicPlan lessonsLength={lessonsLength} sections={sections} />

        <RatingHorizontal rating={course.rating} color="#FFF6E8" />

        <WhereClientsWorks />

        <LineDivider />

        <MeetAuthor />

        <AfterPaymentBlock>
          <CourseBigTitle>After payment, you can immediately start practicing</CourseBigTitle>

          <APItems>
            <APItem>
              <APLeft>1</APLeft>
              <APRight>
                Click the &quot;Get Started&quot; button, enter your email in the field and you will be taken to a
                secure payment page
              </APRight>
            </APItem>
            <APItem>
              <APLeft>2</APLeft>
              <APRight>
                Complete the order process and you will instantly receive a password to access your personal Sacrill
                account
              </APRight>
            </APItem>
            <APItem>
              <APLeft>3</APLeft>
              <APRight>
                Take lessons, perform practical tasks, ask the author questions and discover new courses
              </APRight>
            </APItem>
          </APItems>
        </AfterPaymentBlock>

        <StudentRatingBlock>
          <CourseBigTitle>Thousands of satisfied students</CourseBigTitle>
          <CourseBigTitle>
            4.6<SpanText>Course rating</SpanText>
          </CourseBigTitle>
        </StudentRatingBlock>

        <ProgressBars>
          <ProgressBarItem>
            <PB>
              <CustomProgressBar variant="determinate" value={normalise(54)} />
            </PB>
            <PBRating>
              <Rating stars={5} />
            </PBRating>
            <PBPercentages>
              <Text>54%</Text>
            </PBPercentages>
          </ProgressBarItem>
          <ProgressBarItem>
            <PB>
              <CustomProgressBar variant="determinate" value={normalise(32)} />
            </PB>
            <PBRating>
              <Rating stars={4} />
            </PBRating>
            <PBPercentages>
              <Text>32%</Text>
            </PBPercentages>
          </ProgressBarItem>
          <ProgressBarItem>
            <PB>
              <CustomProgressBar variant="determinate" value={normalise(11)} />
            </PB>
            <PBRating>
              <Rating stars={3} />
            </PBRating>
            <PBPercentages>
              <Text>11%</Text>
            </PBPercentages>
          </ProgressBarItem>
          <ProgressBarItem>
            <PB>
              <CustomProgressBar variant="determinate" value={normalise(2)} />
            </PB>
            <PBRating>
              <Rating stars={2} />
            </PBRating>
            <PBPercentages>
              <Text>2%</Text>
            </PBPercentages>
          </ProgressBarItem>
          <ProgressBarItem>
            <PB>
              <CustomProgressBar variant="determinate" value={normalise(1)} />
            </PB>
            <PBRating>
              <Rating stars={1} />
            </PBRating>
            <PBPercentages>
              <Text>1%</Text>
            </PBPercentages>
          </ProgressBarItem>
        </ProgressBars>

        <StudentFeedback />
        <StudentFeedback />
        <StudentFeedback />

        <TopCourses>
          <CourseBigTitle>Top courses on Sacrill</CourseBigTitle>

          <CategoriesContainer>
            <CustomSlider autoplay={false} centerMode={false} responsive={defaultResponsive}>
              {coursesItems}
            </CustomSlider>
          </CategoriesContainer>
        </TopCourses>

        <FAQ />

        <GraySupportBlock />
      </Container>

      {/* <PayModal1
        // fullScreen={fullScreen}
        open={open}
        fullWidth={true}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <MainCourse>
            <CourseImage></CourseImage>
            <CourseDescription>
              <CourseText>{course.title}</CourseText>
              <CourseRating>
                <RatingHorizontal rating={course.rating} color="#F5F5F5" short={true} />
              </CourseRating>
            </CourseDescription>
          </MainCourse>

          <AdditionalCourse>
            <CourseImage></CourseImage>
            <CourseDescription>
              <CourseSmallText>{course.title}</CourseSmallText>
              <CourseRating>
                <CourseSmallText>
                  <LaterLink>Later</LaterLink>
                </CourseSmallText>
                <AddToOrder>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Add to order" />
                  </FormGroup>
                </AddToOrder>
              </CourseRating>
            </CourseDescription>
          </AdditionalCourse>
          <TotalPrice>Total: <DiscountPrice>$190</DiscountPrice> $19</TotalPrice>
          <Divider />

          <PayProgressBar variant="determinate" value={normalise(80)} />
          <ProgressPercentages>80%</ProgressPercentages>
          <Text>To which email should I send access to the course?</Text>

          <FormBlock>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                type="text"
                placeholder="Enter your email"
                variant="outlined"
                fullWidth={true}
                sx={{
                  '& input': {
                    paddingLeft: '58px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px'
                  },
                  '& label.Mui-focused': {
                    color: '#808080',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'green',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      paddingLeft: '20px',
                      border: '1px solid #E5E5E5',
                      borderRadius: '12px'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E5E5E5',
                    },
                  },
                }}
              />
            </Box>
            <EmailIcon name='email' width={20} height={18} />
          </FormBlock>
          <GreenButton>Continue</GreenButton>
          <button onClick={() => setOpen(false)}>Close</button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </PayModal1> */}

      <PayModal
        open={open}
        sx={{
          overflow: 'scroll',
        }}
      >
        <ModalContent>
          <MainCourse>
            <CourseImage></CourseImage>
            <CourseDescription>
              <CourseText>{course.title}</CourseText>
              <CourseRating>
                <RatingHorizontal rating={course.rating} color="#F5F5F5" short={true} />
              </CourseRating>
            </CourseDescription>
          </MainCourse>

          <AdditionalCourse>
            <CourseImage></CourseImage>
            <CourseDescription>
              <CourseSmallText>{course.title}</CourseSmallText>
              <CourseRating>
                <CourseSmallText>
                  <LaterLink>Later</LaterLink>
                </CourseSmallText>
                <AddToOrder>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Add to order" />
                  </FormGroup>
                </AddToOrder>
              </CourseRating>
            </CourseDescription>
          </AdditionalCourse>
          <TotalPrice>
            Total: <DiscountPrice>$190</DiscountPrice> $19
          </TotalPrice>
          <Divider />

          <PayProgressBar variant="determinate" value={normalise(80)} />
          <ProgressPercentages>80%</ProgressPercentages>
          <Text>To which email should I send access to the course?</Text>

          <FormBlock>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
              <TextField
                type="text"
                placeholder="Enter your email"
                variant="outlined"
                fullWidth={true}
                sx={{
                  '& input': {
                    paddingLeft: '58px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                  },
                  '& label.Mui-focused': {
                    color: '#808080',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'green',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      paddingLeft: '20px',
                      border: '1px solid #E5E5E5',
                      borderRadius: '12px',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E5E5E5',
                    },
                  },
                }}
              />
            </Box>
            <EmailIcon name="email" width={20} height={18} />
          </FormBlock>
          <GreenButton>Continue</GreenButton>
          <CheckboxBlock>
            <Checkbox sx={checkboxStyle} />
            <SmallText>
              I consent to process my personal data and agree Terms of Services agreement, Privacy policy, and User
              Agreement.
            </SmallText>
          </CheckboxBlock>
          <BenefitsBlock>
            <Title>Benefits Include</Title>

            <Includes>
              <IncludeItem>
                <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
                <IncludeText>
                  No risk. If the course does not meet your expectations within the first 14 days of purchase, we will
                  refund the full price of the card without additional question. Simply email the support team at
                  hello@sacrill.com
                </IncludeText>
              </IncludeItem>
              <IncludeItem>
                <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
                <IncludeText>To cancel your subscription, just write to us at hello@sacrill.com</IncludeText>
              </IncludeItem>
              <IncludeItem>
                <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
                <IncludeText>
                  You can start practicing immediately after completing the form. No need to wait to get started.
                </IncludeText>
              </IncludeItem>
            </Includes>
          </BenefitsBlock>
        </ModalContent>
      </PayModal>
    </Element>
  );
};
