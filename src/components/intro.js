import SC from '@emotion/styled';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {Course} from './course'

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

const CoursesList = SC.div`
  display: flex;
`;

const COURSES = [
  {
    id: 1,
    slug: 'https://edston.com/silovoi-streicing-4',
    title:  'Power Стрейчинг',
    author:  ['Екатерина'],
    image:  'https://author.edston.com/storage/media/33984/conversions/4ac914d15850a9c23b1b2f94449f2584d9eff171-thumb_440.jpg',
    price: 1490,
    price_without_discount: 14900,
  },
  {
    id: 2,
    slug: 'https://edston.com/prakticeskii-kurs-molodaya-ya-na-raz-dva-tri-2',
    title:  'Практический курс "Молодая Я на раз-два-три"',
    author:  ['Ирина Март'],
    image:  'https://author.edston.com/storage/media/33717/conversions/8cc8d1a6a780a77ebc2c77203d349d91b8110ce6-thumb_440.jpg',
    price: 1490,
    price_without_discount: 14900,
  },
  {
    id: 3,
    slug: 'https://edston.com/krasivaya-koza-za-14-dnei',
    title:  'Красивая кожа за 14 дней',
    author:  ['Александр Канайкин', 'Терентьева Ирина'],
    image:  'https://author.edston.com/storage/media/32867/conversions/febc8c5bad300677cbfafeb577962ba9a035cf37-thumb_440.jpg',
    price: 1490,
    price_without_discount: 14900,
  },
  {
    id: 4,
    slug: 'https://edston.com/tancevalnaya-terapiya',
    title:  'Танцевальная терапия',
    author:  ['Юлия Демина'],
    image:  'https://author.edston.com/storage/media/5685/conversions/%D0%A2%D0%B0%D0%BD%D1%86%D0%B5%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%8F-thumb_440.jpg',
    price: 1490,
    price_without_discount: 14900,
  },
  {
    id: 5,
    slug: 'https://edston.com/prakticeskii-onlain-kurs-zenskaya-ioga',
    title:  'Йога для укрепления женского здоровья',
    author:  ['Анастасия Миронова'],
    image:  'https://author.edston.com/storage/media/12984/conversions/c654230b8af2c0c97fa52a871a4a3dd334a97fd1-thumb_440.jpg',
    price: 1490,
    price_without_discount: 14900,
  },
  {
    id: 6,
    slug: 'https://edston.com/dinamicheskaya-joga-dlya-strojnogo-tela',
    title:  'Динамическая йога для стройного тела',
    author:  ['Алексей Кушнаренко'],
    image:  'https://author.edston.com/storage/media/310/conversions/2.2-thumb_440.jpg',
    price: 499,
    price_without_discount: 4990,
  }
];

export const Intro = props => (
  <Element name="intro">
    <section>
      <Container>

        <Brand>Skills that are not taught in school</Brand>
        <CoursesList>
          {COURSES.map(course => <Course key={course.id} {...course} />)}
        </CoursesList>
      </Container>
    </section>
  </Element>
);
