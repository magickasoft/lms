import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {Price} from './price';

import {ibmplexsans400, maxDevice} from '../styles';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 23vh 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

const Brand = SC.h3`
  font-weight: 400;
  margin: 0 0 12px 0;
  font-size: 56px;
  line-height: 1.3;
  width: 80%;
  @media ${maxDevice.laptop} {
    font-size: 43px;
  }
  @media ${maxDevice.tablet} {
    width: 100%;
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

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

export const Course = props => (

  <Element name="course-item">
    <section>
      <CourseItem>
        <img src={props.image} />

        <Details>
          <div>
            <Title>
              {props.title}
            </Title>
            <Author>
              {props.author.join(' • ')}
            </Author>
          </div>
          <div>
            <Hr />
            <BottomBlock>
              <Price price={props.price} price_without_discount={props.price_without_discount} />
              <Arrow>
                &gt;
              </Arrow>
            </BottomBlock>
          </div>
        </Details>
      </CourseItem>
    </section>
  </Element>
);
