import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {useGetCoursesQuery, useGetPopularCoursesQuery} from '../../generated/graphql';
import {ibmplexsans400, maxDevice} from '../styles';
import {Button} from './Button/button';
import {WhiteButton} from './Button/whiteButton';
import {Course} from './course';
import {CustomSlider} from './customSlider';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  padding: 0 0 120px 0;
  @media ${maxDevice.tablet} {
    padding: 0 0 80px 0;
  }
`;

const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 23vh 200px 60px 200px;
  @media ${maxDevice.tablet} {
    padding: 18vh 20px 30px 20px;
  }
`;

const BlackButton = SC(Button)`
  margin-right: 10px;
`;

const defaultResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const courseTypes = [
  {type: 'new', label: 'Categories.courseType1'},
  {type: 'top', label: 'Categories.courseType2'},
  {type: 'sale', label: 'Categories.courseType3'},
  {type: 'popular', label: 'Categories.courseType4'},
];

type CourseTypeProps = {
  type?: string;
  label?: any;
};

export const Categories = props => {
  const [activeType, setActiveType] = React.useState('new');
  const {t} = useTranslation('common');
  const courses = useGetCoursesQuery({variables: {}});
  const list = courses?.data?.getCourses || [];

  const onClickType = (type: string) => () => {
    setActiveType(type);
  };

  return (
    <Element name="categories">
      <Container>
        <Content>
          {courseTypes.map(({type, label}: CourseTypeProps, index) => {
            const Component = type == activeType ? BlackButton : WhiteButton;
            return (
              <Component key={index} onClick={onClickType(type)}>
                {t(label)}
              </Component>
            );
          })}
        </Content>
        <CustomSlider centerMode={false} responsive={defaultResponsive}>
          {list.map(course => (
            <Course key={course.id.toString()} {...course} />
          ))}
        </CustomSlider>
      </Container>
    </Element>
  );
};
