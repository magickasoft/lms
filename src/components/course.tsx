import SC from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import {Price} from './price';

const CourseItem = SC.div`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgb(128 128 128 / 15%);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-basis: 220px;
  flex-shrink: 0;
  width: 220px;
  height: 290px;
  margin-right: 15px;
  
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  margin-bottom: 40px;
`;

const Details = SC.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = SC.div`
  font-size: 15px;
  max-height: 44px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const Author = SC.div`
  font-size: 13px;
  overflow: hidden;
  color: #808080;
  white-space: nowrap;
`;

const Arrow = SC.div`
`;

const BottomBlock = SC.div`
  display: flex;
  justify-content: space-between;
`;

const Hr = SC.hr`
  border: 0;
  border-bottom: 1px dashed #ccc;
  margin: 1rem 0;
`;

const ImageBlock = SC.div`
  position: relative;
  max-height: 115px;
  height: 100%;
`;

type CourseProps = {
  image: any;
  title: any;
  author: any;
  price: any;
  price_without_discount: any;
  children?: any;
};

export const Course = ({image, title, author, price, price_without_discount, ...props}: CourseProps) => (
  <section>
    <CourseItem>
      <ImageBlock>
        <Image src={image} height={115} width={220} alt="Course thumbnail" />
      </ImageBlock>

      <Details>
        <div>
          <Title>{title}</Title>
          <Author>{author.join(' • ')}</Author>
        </div>
        <div>
          <Hr />
          <BottomBlock>
            <Price price={price} price_without_discount={price_without_discount} />
            <Arrow>&gt;</Arrow>
          </BottomBlock>
        </div>
      </Details>
    </CourseItem>
  </section>
);
