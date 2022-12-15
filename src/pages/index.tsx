import type {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';
import {Events, scrollSpy} from 'react-scroll';

import {
  Brand,
  Categories,
  Club,
  FAQ,
  Header,
  Improve,
  JoinSacrill,
  SacrillWorks,
  Stories,
  StudentReviews,
  StudentSay,
  Teach,
} from '../components';

type Props = {
  // Add custom props here
};

const Home = (_props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  React.useEffect(() => {
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
      <Header />
      <Brand />
      <Categories />
      <JoinSacrill />
      <SacrillWorks />
      <Stories />
      <StudentSay />
      <StudentReviews />
      <Club />
      <Improve />
      <FAQ />
      <Teach />
    </>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? 'es', ['common'])),
//   },
// });

export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common'])),
  },
});

export default Home;
