import SC from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {getCourseThumbnail} from '../helpers/media';
import {getPrices} from '../helpers/price';
import {maxDevice} from '../styles';
import {Price} from './price';

const CourseItem = SC.div`
  position: relative;
  background: #FFFFFF;
  // box-shadow: 0px 4px 20px rgb(128 128 128 / 15%);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  flex-shrink: 0;
  width: 240px;
  height: 290px;
  margin-right: 20px;

  @media ${maxDevice.mobileL} {
    width: 100%;
  }
  
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
`;

const Details = SC.div`
  flex-grow: 1;
  padding-top: 30px;
  padding-right: 10px;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = SC.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  font-size: 15px;
  max-height: 44px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const Author = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
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
const LinkHref = SC.a``;

type Media = {
  id?: bigint;
  uuid?: string;
  collection_name?: string;
  file_name?: string;
  generated_conversions?: any;
};

type CourseProps = {
  media?: Media[];
  id?: any;
  title?: any;
  slug?: string;
  author_info?: any;
  price?: any;
  children?: any;
};

const SMALL_SIZE = '440';

export const Course = ({id, media, title, slug, author_info, price, ...props}: CourseProps) => {
  // const coursePrice = getPrices(price);

  const router = useRouter();
  // router.push('/dashboard');

  return (
    <section>
      <Link href={`/${slug}`}>
        <CourseItem>
          <ImageBlock>
            <Image src={getCourseThumbnail(media, SMALL_SIZE)} height={130} width={240} alt="Course image" />
          </ImageBlock>

          <Details>
            <div>
              <Title>{title}</Title>
              <Author>{author_info.map((author: {name: any}) => author.name).join(' • ')}</Author>
            </div>
            {/* <div>
            <Hr />
            <BottomBlock>
            <Price price={coursePrice?.rub} price_without_discount={coursePrice?.rub * 10} />
            <Arrow>&gt;</Arrow>
            </BottomBlock>
          </div> */}
          </Details>
        </CourseItem>
      </Link>
    </section>
  );
};
