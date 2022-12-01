import SC from '@emotion/styled';
import React from 'react';

import {maxDevice, theme} from '../styles';

const OriginalPrice = SC.div`
  color: #808080;
  text-decoration: line-through;
  padding-right: 5px;
  display:flex;
`;

const CurrentPrice = SC.div`
  color: #212529;
  white-space: nowrap;
  font-weight: 600;
  display:flex;
`;

const Currency = SC.div`
  font-weight: 400;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
`;

const PriceBlock = SC.div`
  display: flex;
  float: left;
  max-width: 151px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
`;

type PriceProps = {
  price_without_discount?: any;
  price?: any;
};

export const Price = ({price = 0, price_without_discount, ...props}: PriceProps) => (
  <PriceBlock>
    {price_without_discount && (
      <OriginalPrice>
        {price_without_discount}

        <Currency>₽</Currency>
      </OriginalPrice>
    )}
    <CurrentPrice>
      {price}

      <Currency>₽</Currency>
    </CurrentPrice>
  </PriceBlock>
);
