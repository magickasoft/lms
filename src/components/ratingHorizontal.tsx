import {css} from '@emotion/react';
import SC from '@emotion/styled';
import Image from 'next/image';
import {HTMLAttributes} from 'react';

import {Rating} from './rating';

const CenterBlock = SC.div`
  display: flex;
  justify-content: center;
`;

interface DivProps extends HTMLAttributes<any> {
  paddingLeft?: number;
}

const RatingHorizontalBox = SC.div<DivProps>`
  display: flex;
  max-width: 500px;
  background: #FFFFFF;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  margin-bottom: 14px;

  ${({color}) =>
    color &&
    css`
      background: ${color};
    `}

  ${({paddingLeft}) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft}px;
    `}
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
const ImagesLine = SC.div`
  display: flex;
  margin: 10px;
`;
const RatingImage1 = SC(Image)`
  position: relative;
  left: 32px;
`;
const RatingImage2 = SC(Image)`
  position: relative;
  left: 24px;
`;
const RatingImage3 = SC(Image)`
  position: relative;
  left: 16px;
`;
const RatingImage4 = SC(Image)`
  position: relative;
  left: 8px;
`;
const RatingImage5 = SC(Image)`
  position: relative;
`;

type RatingHorizontalProps = {
  rating: number;
  color: string;
  short?: boolean | false;
};

export const RatingHorizontal: React.FC<RatingHorizontalProps> = ({rating, color, short}) => {
  return (
    <CenterBlock>
      <RatingHorizontalBox color={color} paddingLeft={0}>
        <Rating stars={4} short={short} />
        <RatingText>
          {!short && 'Rating'}
          {rating} / 321 reviews
        </RatingText>
        <ImagesLine>
          <RatingImage1 src={'/images/rating_1.png'} height={36} width={36} alt="Rating image" />
          <RatingImage2 src={'/images/rating_2.png'} height={36} width={36} alt="Rating image" />
          <RatingImage3 src={'/images/rating_3.png'} height={36} width={36} alt="Rating image" />
          <RatingImage4 src={'/images/rating_4.png'} height={36} width={36} alt="Rating image" />
          <RatingImage5 src={'/images/rating_5.png'} height={36} width={36} alt="Rating image" />
        </ImagesLine>
      </RatingHorizontalBox>
    </CenterBlock>
  );
};
