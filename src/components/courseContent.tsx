import SC from '@emotion/styled';
import React from 'react';
import { Element } from 'react-scroll';

import { CourseInfo } from './courseInfo';
import { RightMenu } from './rightMenu';

const Container = SC.header`
  padding: 0 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 750px;
`;

export const CourseContent = () => {
    return (
        <Element name="course">
            <Container>
                <CourseInfo />
                <RightMenu />
            </Container>
        </Element>
    )
}

