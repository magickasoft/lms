import SC from '@emotion/styled';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {maxDevice} from '../styles';
import {CustomSlider} from './customSlider';

const Container = SC.div`
  padding: 120px 160px;
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
type ImgProps = {
  src: string;
}

const Img = SC.div<ImgProps>`
  height: 250px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const defaultPhotoResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    },
  },
  {
    breakpoint: 1205,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
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

export const Stories = (props: any) => {
  const {t} = useTranslation('common');
  const photos = [...Array(10)].map((key: number, index: number) => {
    return (
      <Img key={index} src={'/images/slider_' + (index + 1) + '.png'} />
    );
  });

  return (
    <Element name="Stories">
      <Container>
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
      </Container>
    </Element>
  );
};
