import SC from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {capitalize} from '../utils/capitalize';
import {WhiteButton} from './Button/whiteButton';

const Container = SC.span`
  margin: 0;

  @media (max-width: 1130px) {
    display: none;
  }
`;

const Locale = SC(Link)`
  margin: 0 5px;
`;

export const LocaleSwitcher = () => {
  const router = useRouter();
  const {locale, locales, pathname, query, asPath} = router;
  const list = (locales || []).filter(l => l !== locale);

  return (
    <Container>
      {list.map(locale => (
        <Locale key={locale} href={{pathname, query}} as={asPath} locale={locale} legacyBehavior>
          <WhiteButton>{capitalize(locale)}</WhiteButton>
        </Locale>
      ))}
    </Container>
  );
};
