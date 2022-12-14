import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

import {useGetCoursesQuery, useGetPopularCoursesQuery, useGetTopCoursesQuery} from '../../generated/graphql';
import {ibmplexsans400, maxDevice} from '../styles';
import {WhiteButton} from './Button/whiteButton';
import {Course} from './course';
import {CustomSlider} from './customSlider';

const Container = SC.section`
  font-family: ${ibmplexsans400.style.fontFamily};
  overflow: hidden;
  padding: 0 0 120px 0;
  @media ${maxDevice.tablet} {
    padding: 0 20px 0 20px;
  }
`;

const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 40px 200px 60px 200px;
  @media ${maxDevice.tablet} {
    padding: 18vh 20px 30px 20px;
  }
  @media ${maxDevice.mobileL} {
    padding: 0 0 30px 0;
    display: flex;
  }
`;

const CategoryButton = SC(WhiteButton)`
  @media ${maxDevice.mobileL} {
    width: 100%;
  }
`;

const defaultResponsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1205,
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

const courseTypes = [
  {type: 'new', label: 'Categories.courseType1'},
  {type: 'top', label: 'Categories.courseType2'},
  // {type: 'sale', label: 'Categories.courseType3'},
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
  const popularCourses = useGetPopularCoursesQuery({variables: {}});
  const topCourses = useGetTopCoursesQuery({variables: {}});

  const onClickType = (type: string) => () => {
    setActiveType(type);
  };

  let coursesItems = [];
  if (activeType === 'new') {
    coursesItems = courses?.data?.getCourses?.map(course => <Course key={course.id.toString()} {...course} />);
  } else if (activeType === 'popular') {
    coursesItems = popularCourses?.data?.getPopularCourses?.map(course => (
      <Course key={course.id.toString()} {...course} />
    ));
  } else if (activeType === 'top') {
    coursesItems = topCourses?.data?.getTopCourses?.map(course => <Course key={course.id.toString()} {...course} />);
  }

  return (
    <Element name="categories">
      <Container>
        <Content>
          {courseTypes.map(({type, label}: CourseTypeProps, index) => (
            <CategoryButton key={index} onClick={onClickType(type)} active={activeType === type}>
              {t(label)}
            </CategoryButton>
          ))}
        </Content>
        <CustomSlider autoplay={false} centerMode={false} responsive={defaultResponsive}>
          {coursesItems}
        </CustomSlider>
      </Container>
    </Element>
  );
};
