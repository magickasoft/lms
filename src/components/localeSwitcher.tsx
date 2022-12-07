import SC from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {capitalize} from '../utils/capitalize';
import {WhiteButton} from './Button/whiteButton';

const Container = SC.span`
  margin: 0;
`;

const Locale = SC(Link)`
  margin: 0 5px;
`;

export const LocaleSwitcher = () => {
  const router = useRouter();
  const {locales, pathname, query, asPath} = router;
  return (
    <Container>
      {(locales || []).map(locale => (
        <Locale key={locale} href={{pathname, query}} as={asPath} locale={locale} legacyBehavior>
        <WhiteButton>{capitalize(locale)}</WhiteButton> 
      </Locale>
      ))}
    </Container>
  );
};
