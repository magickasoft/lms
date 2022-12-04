import SC from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

const Container = SC.div`
  margin: 0 10px;
`;

const Locale = SC.span`
  margin: 0 5px;
`;

export const LocaleSwitcher = () => {
  const router = useRouter();
  const {locales, pathname, query, asPath} = router;
  return (
    <Container>
      {(locales || []).map(locale => (
        <Locale key={locale}>
          <Link href={{pathname, query}} as={asPath} locale={locale} legacyBehavior>
            {locale}
          </Link>
        </Locale>
      ))}
    </Container>
  );
};
