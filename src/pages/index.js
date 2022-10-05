import React from 'react';
import Head from 'next/head';
import {Events, scrollSpy} from 'react-scroll';
import {Intro} from '../components';

function Home(props) {
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
        <title>landing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="description" content="landing" />
        <meta name="keywords" content="landing" />
        <meta property="og:title" content="landing" />
        <meta property="og:description" content="landing" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://site.ru/" />
        <meta property="og:site_name" content="landing" />
        <meta property="og:image" content="/static/images/cover.jpeg" key="og:image" />
        <meta property="twitter:image" content="/static/images/cover.jpeg" key="twitter:image" />
        <meta property="twitter:title" content="landing" />
        <meta property="twitter:description" content="landing" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://site.ru/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Intro />
    </>
  );
}

export default Home;
