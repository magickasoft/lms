import { css } from '@emotion/react';
import SC from '@emotion/styled';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import moment from 'moment';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { getPrices } from 'src/helpers/price';
import { useGlobalContext } from 'src/pages/[slug]';

import { GreenButton } from './Button/greenButton';
import { Rating } from './rating';
import { SaleTimer } from './saleTimer';
import { SidebarPrice } from './sidebarPrice';

interface CustomButtonProps {
  isFixed?: boolean | false;
}

const Container = SC.div<CustomButtonProps>`
  width: 360px;
  background: #fff;

  box-shadow: 5px 5px 60px rgba(126, 126, 126, 0.1);
  border-radius: 12px;
  z-index: 2;

  ${({ isFixed }) =>
    isFixed && (
      css`
        position: fixed;
        top: 0;
        left: 1180px;
        margin-top: 30px;
    `)}
`;
const TimerContainer = SC.div`
  border-bottom: 1px solid #E5E5E5;
`;
const ContentContainer = SC.div`
  padding: 20px 20px 0 20px;
  border-bottom: 1px solid #E5E5E5;
`;
const IncludeContainer = SC.div`
  padding: 20px;
`;
const ButtonContainer = SC.div`
  margin-bottom: 20px;
`;
const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  margin-bottom: 20px;
`;
const TextItem = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
`;
const IncludeText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: left;
  color: #333333;
  margin-left: 13px;
`;
const RatingText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  margin-left: 10px;
`;
const ReviewsBlock = SC.div`
  background: #FFF6E8;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;
const ImagesLine = SC.div`
  display: flex;
  margin-bottom: 5px;
`;
const RatingLine = SC.div`
  display: flex;
  // margin-bottom: 20px;
`;
const RatingImage1 = SC(Image)`
  position: relative;
`;
const RatingImage2 = SC(Image)`
  position: relative;
  left: -8px;
`;
const RatingImage3 = SC(Image)`
  position: relative;
  left: -16px;
`;
const RatingImage4 = SC(Image)`
  position: relative;
  left: -24px;
`;
const RatingImage5 = SC(Image)`
  position: relative;
  left: -32px;
`;
const CompanyImage = SC(Image)`
  
`;
const CompaniesText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #808080;
  // display: flex;
  margin-bottom: 20px;
`;
const CompaniesImages = SC.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;

  margin-bottom: 20px;
`;
const AlignLeft = SC.div`
  text-align: left;
`;
const F20 = SC.div`
  font-size: 20px;
  line-height: 120%;
`;
const Includes = SC.div`
  margin-top: 10px;
`;
const IncludeItem = SC.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
`;


const includesArray = [
  '40 hours of video lessons',
  '17 practice files',
  'Access without time limit',
  'Access via computer or phone',
  'Certificate of passing',
]

type IncludeItemProps = {
  text: string;
  icon: string;
}

export const RightMenu = () => {
  const { course } = useGlobalContext();
  const [scrollY, setScrollY] = useState(typeof window != 'undefined' ? window.pageYOffset : 0);
  const onScroll = useCallback((event: any) => {
    setScrollY(window.pageYOffset);
  }, []);
  const endDate = moment().days(4).endOf('day');

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const price = getPrices(course.price);
  const includeItems = JSON.parse(course.description).filter(info => info.type == 'include')[0]?.list;

  return (
    <Element name="rightMenu">
      <Container isFixed={scrollY >= 160} theme={undefined}>
        <TimerContainer>
          <SaleTimer percentage={90} endDate={endDate} />
        </TimerContainer>
        <ContentContainer>
          <SidebarPrice price={price?.usd} currency={'$'} />
          <ButtonContainer>
            <GreenButton>Open Access Now</GreenButton>
          </ButtonContainer>
          <Text>100% money back guarantee within 14 days</Text>
          <ReviewsBlock>
            <ImagesLine>
              <RatingImage1
                src={'/images/rating_1.png'}
                height={36}
                width={36}
                alt="Rating image"
              />
              <RatingImage2
                src={'/images/rating_2.png'}
                height={36}
                width={36}
                alt="Rating image"
              />
              <RatingImage3
                src={'/images/rating_3.png'}
                height={36}
                width={36}
                alt="Rating image"
              />
              <RatingImage4
                src={'/images/rating_4.png'}
                height={36}
                width={36}
                alt="Rating image"
              />
              <RatingImage5
                src={'/images/rating_5.png'}
                height={36}
                width={36}
                alt="Rating image"
              />
            </ImagesLine>
            <RatingLine>
              <Rating stars={4} />
              <RatingText>Rating {course.rating} / 321 reviews</RatingText>
            </RatingLine>
          </ReviewsBlock>
          <CompaniesText>Companies where our clients work:</CompaniesText>
          <CompaniesImages>
            <CompanyImage
              src={'/images/company_apple.png'}
              height={28}
              width={28}
              alt="Company image"
            />
            <CompanyImage
              src={'/images/company_ms.png'}
              height={32}
              width={26}
              alt="Company image"
            />
            <CompanyImage
              src={'/images/company_amazon.png'}
              height={27}
              width={33}
              alt="Company image"
            />
            <CompanyImage
              src={'/images/company_cola.png'}
              height={28}
              width={52}
              alt="Company image"
            />
            <CompanyImage
              src={'/images/company_google.png'}
              height={27}
              width={26}
              alt="Company image"
            />
          </CompaniesImages>
        </ContentContainer>
        <IncludeContainer>
          <TextItem>
            <AlignLeft>
              <F20>
                The course includes:
              </F20>

              <Includes>
                {includeItems && includeItems.map((item: IncludeItemProps, idx: number) => {
                  return (
                    <IncludeItem key={idx}>
                      <Image
                        src={'/images/mark_yes.svg'}
                        height={12}
                        width={17}
                        alt="Mark image"
                      />
                      <IncludeText key={idx}>
                        {item.text}
                      </IncludeText>
                    </IncludeItem>
                  )
                })}
              </Includes>
            </AlignLeft>
          </TextItem>
        </IncludeContainer>
      </Container>
    </Element>
  )
}

