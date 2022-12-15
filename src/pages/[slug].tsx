import e from 'cors';
import type {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {Events, scrollSpy} from 'react-scroll';
import { CourseContent, Footer } from 'src/components';
import { CourseHeader } from 'src/components/courseHeader';

type Course = {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  author_info: string;
  rating: number;
  price: number;
}

type Props = {
  course: Course | null;
  // Add custom props here
};

export type GlobalContext = {
  course: Course | null
  setCourse:(course: Course) => void
}

export const MyGlobalContext = createContext<GlobalContext>({
  course: null,
  setCourse: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext)

const Course = (_props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const {course: serverCourse} = _props as Props;
  const [course, setCourse] = useState<Course>(serverCourse);

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', to);
    });
  
    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to);
    });
  
    scrollSpy.update();
  
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
  if(serverCourse == undefined) {
    return <>Loading...</>;
  }

  // const getCourse = (userType: string):Course | null => {
  //   if (userType.toLowerCase() === 'admin')
  //   {
  //       return 'Hello Admin User!'
  //   }
  //   return 'Welcome user!'
  // }

  // const course = useContext<Course>(serverCourse)

  console.log('course: ', serverCourse);
  console.log('slug: ', slug);

  

  return (
    <>
      <Head>
        <title>sacrill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="description" content="sacrill" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="sacrill" />
        <meta property="og:description" content="sacrill" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://sacrill.com/" />
        <meta property="og:site_name" content="sacrill" />
        <meta property="og:image" content="/cover.jpeg" key="og:image" />
        <meta property="twitter:image" content="/cover.jpeg" key="twitter:image" />
        <meta property="twitter:title" content="sacrill" />
        <meta property="twitter:description" content="sacrill" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://sacrill.com/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <MyGlobalContext.Provider value= {{ course, setCourse }}>
        <CourseHeader />
        <CourseContent />
        {/* <h1>{serverCourse?.title}</h1>
        <div>
          {serverCourse?.excerpt}
        </div> */}
      </MyGlobalContext.Provider>
    </>
  );
};

interface CourseServerSideProps extends GetServerSideProps<Props> {
  query: {
    slug?: string;
  },
  locale: string;
}

export const getServerSideProps = async ({query, locale} : CourseServerSideProps) => {
  const response = await fetch(`http://edston.lc/api/course-by-slug/${query.slug}`);
  const course = await response.json();

  return {
    props: {
      ...(course),
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    }
  };
};

export default Course;
