
import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import {Element} from 'react-scroll';
import { getImageRatio } from 'src/helpers/imageRatio';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

import {ibmplexsans400, maxDevice} from '../styles';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 0 200px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
  @media ${maxDevice.laptopM} {
    padding: 0 100px;
  }
  @media (max-width: 712px) {
    padding: 0 20px;
  }
`;

const TextContainer = SC.div`
  padding: 0 0 0 240px;

  @media (max-width: 1310px) {
    padding: 0 0 0 190px;
  }
  @media (max-width: 1230px) {
    padding: 0 0 0 100px;
  }
  @media (max-width: 970px) {
    padding-left: 75px;
  }
  @media ${maxDevice.tablet} {
    padding-left: 35px;
  }
  @media (max-width: 712px) {
    padding-left: 0;
  }
`;

const TopText = SC.div`
  z-index: 2;
`;

const TopImage1 = SC.div`
  position: absolute;
  top: 190px;
  left: 174px;
  z-index: 2;

  @media ${maxDevice.laptopM} {
    left: 74px;
  }
  @media ${maxDevice.tablet} {
    top: 240px;
    left: 0;
  }
`;

const TopImage2 = SC.div`
  position: absolute;
  top: 460px;
  left: 462px;

  @media ${maxDevice.laptopM} {
    left: 362px;
  }
  @media (max-width: 1310px) {
    left: 332px;
  }
  @media (max-width: 1230px) {
    top: 340px;
    left: 222px;
  }
  @media (max-width: 970px) {
    top: 330px;
    left: 210px;
  }
  @media ${maxDevice.tablet} {
    top: 120px;
    left: 460px;
  }
  @media (max-width: 570px) {
    left: 260px;
  }
`;

const TopImage3 = SC.div`
  position: absolute;
  top: 130px;
  left: 965px;

  @media ${maxDevice.laptopM} {
    left: 865px;
  }
  @media (max-width: 1310px) {
    left: 820px;
    top: 145px;
  }
  @media (max-width: 1230px) {
    left: 582px;
  }
  @media (max-width: 970px) {
    left: 540px;
    top: 130px;
  }
  @media (max-width: 970px) {
    left: 490px;
    top: 140px;
  }
  @media ${maxDevice.tablet} {
    left: 110px;
    top: 90px;
    z-index: 4;
  }
`;

const TopImage4 = SC.div`
  position: absolute;
  top: 176px;
  left: 1195px;
  
  @media ${maxDevice.laptopM} {
    left: 1095px;
  }
  @media (max-width: 1310px) {
    left: 1012px;
  }
  @media (max-width: 1230px) {
    left: 832px;
  }
  @media (max-width: 970px) {
    left: 755px;
  }
  @media (max-width: 970px) {
    left: 655px;
  }
  @media ${maxDevice.tablet} {
    left: 25px;
    top: 345px;
    z-index: 5;
  }
`;

const SupergirlImage = SC.div`
  position: absolute;
  left: 1174px;
  top: 105px;
  z-index: 3;

  @media ${maxDevice.laptopM} {
    left: 1074px;
  }
  @media (max-width: 1310px) {
    left: 980px;
  }
  @media (max-width: 1230px) {
    top: 124px;
    left: 822px;
  }
  @media (max-width: 970px) {
    left: 680px;
  }
  @media (max-width: 970px) {
    left: 600px;
  }
  @media ${maxDevice.tablet} {
    left: 480px;
  }
  @media (max-width: 712px) {
    display: none;
  }
`;

const FingersRockImage = SC.div`
  position: absolute;
  left: 430px;
  top: 337px;

  @media (max-width: 1310px) {
    left: 379px;
  }
  @media (max-width: 1230px) {
    top: 240px;
    left: 312px;
  }
  @media (max-width: 970px) {
    top: 210px;
    left: 285px;
  }
  @media ${maxDevice.tablet} {
    left: 15px;
    top: 85px;
    z-index: 5;
  }
`;
  
const BigFlexBoldText = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 100%;
  display: flex;

  @media (max-width: 1230px) {
    font-size: 120px;
  }
  @media (max-width: 970px) {
    font-size: 100px;
  }
  @media ${maxDevice.tablet} {
    font-size: 80px;
  }
`;

const BigBoldText = SC.div`
  font-family: 'Bebas Neue Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 100%;

  @media (max-width: 1230px) {
    font-size: 120px;
  }
  @media (max-width: 970px) {
    font-size: 100px;
  }
  @media ${maxDevice.tablet} {
    font-size: 80px;
    text-align: right;
  }
`;

const RightTitle = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  // text-align: right;
  padding-left: 190px;
  
  @media (max-width: 970px) {
    padding-left: 150px;
  }
  @media ${maxDevice.tablet} {
    padding-left: 100px;
  }
`;

const RightBlowTitle = SC.div`
  font-family: 'Bebas Neue Light';
  font-style: normal;
  font-weight: 600;
  font-size: 92px;
  line-height: 100%;
  text-align: right;
  padding-left: 540px;
  margin-bottom: 20px;
  display: flex;

  @media (max-width: 1310px) {
    padding-left: 440px;
  }
  @media (max-width: 1230px) {
    padding-left: 340px;
  }
  @media (max-width: 970px) {
    padding-left: 230px;
  }
  @media ${maxDevice.tablet} {
    padding-top: 20px;
    padding-left: 135px;
  }
`;

const NormalBlowTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  padding: 0 80px 0 20px;
  margin-bottom: 60px;
  text-align: left;
  
  @media ${maxDevice.tablet} {
    padding-right: 0;
    font-size: 17px;
  }
`;

export const Brand = (props: any) => {
  const { width } = useWindowDimensions();
  
  React.useEffect(() => {
  }, [width]);

  const imageRatio = getImageRatio(width);
  let topImageSizes = {
    1: {width: 120, height: 120},
    2: {width: 90, height: 90},
    3: {width: 60, height: 60},
    4: {width: 90, height: 90}
  };

  if(width > 768) {
    topImageSizes = {
      1: {width: 300 * imageRatio, height: 300 * imageRatio},
      2: {width: 160 * imageRatio, height: 160 * imageRatio},
      3: {width: 180 * imageRatio, height: 180 * imageRatio},
      4: {width: 260 * imageRatio, height: 260 * imageRatio}
    };
  }
  console.log('image ration: ', imageRatio, width);

  return (
    <Element name="brand">
      <section>
        <Container>
            <TextContainer>
              <BigFlexBoldText>
                <TopText>
                  Level up
                </TopText>
                <TopImage3>
                  <Image
                    src={'/images/top_3.png'}
                    height={topImageSizes[3].height}
                    width={topImageSizes[3].width}
                    alt="Top 3 image"
                  />
                </TopImage3>
                <SupergirlImage>
                  <Image
                    src={'/images/supergirl.png'}
                    height={80 * imageRatio}
                    width={80 * imageRatio}
                    alt="Supergirl image"
                  />
                </SupergirlImage>
                <TopImage4>
                  <Image
                    src={'/images/top_4.png'}
                    height={topImageSizes[4].height}
                    width={topImageSizes[4].width}
                    alt="Top 4 image"
                  />
                </TopImage4>
              </BigFlexBoldText>
              <RightTitle>
                <TopImage1>
                  <Image
                    src={'/images/top_1.png'}
                    height={topImageSizes[1].height}
                    width={topImageSizes[1].width}
                    alt="Top 1 image"
                  />
                </TopImage1>
                <TopImage2>
                  <Image
                    src={'/images/top_2.png'}
                    height={topImageSizes[2].height}
                    width={topImageSizes[2].width}
                    alt="Top 2 image"
                  />
                </TopImage2>
                <FingersRockImage>
                  <Image
                    src={'/images/fingers_rock.png'}
                    height={80 * imageRatio}
                    width={80 * imageRatio}
                    alt="Fingers rock image"
                  />
                </FingersRockImage>
                <BigBoldText>your life</BigBoldText>
              </RightTitle>
            </TextContainer>

            <RightBlowTitle>
              <Image
                src={'/images/blow.png'}
                height={imageRatio > 0.5 ? 60 : 40}
                width={imageRatio > 0.5 ? 60 : 40}
                alt="Blow image"
              />
              <NormalBlowTitle>
                Improve health, relationships, emotional and spiritual well-being, learn new skills and tranform your life
              </NormalBlowTitle>
            </RightBlowTitle>
          </Container>
      </section>
    </Element>
  );
};
