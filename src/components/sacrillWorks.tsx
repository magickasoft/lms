import SC from '@emotion/styled';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Element } from 'react-scroll';

import { maxDevice } from '../styles';
import { Rating } from './rating';

const Container = SC.div`
  padding: 0 200px;
`;
const HowSacrillWorks = SC.div`
  margin-bottom: 120px;
`;
const CenterBlock = SC.div`
  text-align: center;
  margin-bottom: 60px;
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

type FeedbackProps = {
  id: number;
  title: string;
  text: string;
  avatar: string;
  name: string;
  jobTitle: string;
  review: string;
  stars: number;
}

const feedbacks: FeedbackProps[] = [
  {
    id: 1,
    title: 'Learn',
    text: 'Level up your life with the world&apos;s best trainers & programs',
    avatar: '/images/how_sacrill_works_sub_1.png',
    name: 'Helen Williams',
    jobTitle: 'Bank employee',
    review: 'I&apos;m participating on multiple Sacrill programs and integrated it easily into my daily routine. It completely fall into my squedule. I feel pumped up and limitless now!',
    stars: 5,
  },
  {
    id: 2,
    title: 'Connect',
    text: 'Be part of a supporting community',
    avatar: '/images/how_sacrill_works_sub_2.png',
    name: 'Mike Tombler',
    jobTitle: 'Technology Engineer',
    review: 'Sacrill brings together like-minded individuals to inspire each other with their daily transformations',
    stars: 5,
  },
  {
    id: 3,
    title: 'Get result',
    text: 'Get results that last a lifetime. Your transformation begins here.',
    avatar: '/images/how_sacrill_works_sub_3.png',
    name: 'Tara Brangston',
    jobTitle: 'Online entrepreneur',
    review: 'Great materials Sacrill international community is a combination that caused a mind shift, helped me understand who I am. I finally started my online business and it is going well!',
    stars: 5,
  },
];

export const SacrillWorks: FC = (props: any) => {
  const { t } = useTranslation('common');

  return (
    <Element name="SacrillWorks">
      <Container>

        <HowSacrillWorks>
          <CenterBlock>
            <HowWorksTitle>
              How <SubSpan>Sacrill works</SubSpan>
            </HowWorksTitle>

            <HowWorksItems>
              {feedbacks.map((feedback: FeedbackProps) => {
                return (
                  <HWSection key={feedback.id}>
                    <HWItem>
                      <ItemTop>
                        {feedback.id == 1 && (
                          <Image1></Image1>
                        )}
                        {feedback.id == 2 && (
                          <Image2></Image2>
                        )}
                        {feedback.id == 3 && (
                          <Image3></Image3>
                        )}
                      </ItemTop>
                      <ItemBottom>
                        <ItemTitle>{feedback.title}</ItemTitle>
                        <ItemDescription>{feedback.text}</ItemDescription>
                      </ItemBottom>
                    </HWItem>
                    <HWFeedback>
                      <FeedbackRow>
                        <Avatar>
                          <Image
                            src={feedback.avatar}
                            height={80}
                            width={80}
                            alt="How Sacrill works image"
                          />
                        </Avatar>
                        <Info>
                          <UserName>{feedback.name}</UserName>
                          <UserTitle>{feedback.jobTitle}</UserTitle>
                        </Info>
                      </FeedbackRow>
                      <FeedbackBlock>
                        <FeedbackRow>
                          <FeedbackText>{feedback.review}</FeedbackText>
                        </FeedbackRow>

                        <FeedbackRow>
                          <Rating stars={feedback.stars} />
                        </FeedbackRow>
                      </FeedbackBlock>
                    </HWFeedback>
                  </HWSection>
                );
              })}
            </HowWorksItems>
          </CenterBlock>
        </HowSacrillWorks>
      </Container>
    </Element>
  );
};
