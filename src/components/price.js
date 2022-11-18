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

export const Price = props => (
  <React.Fragment>
    <PriceBlock>
      {props.price_without_discount && (
        <OriginalPrice>
          {props.price_without_discount}

          <Currency>
            ₽
          </Currency>
        </OriginalPrice>
      )}
      <CurrentPrice>
        {props.price}

        <Currency>
          ₽
        </Currency>
      </CurrentPrice>
    </PriceBlock>
  </React.Fragment>
);
