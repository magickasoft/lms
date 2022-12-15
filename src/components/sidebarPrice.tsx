import SC from '@emotion/styled';

const Price = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;
const Alert = SC.span`
  color: #FF3A44;
`;
const DiscountPrice = SC.span`
  text-decoration-line: line-through;
`;

type SidebarPriceProps = {
  price: number;
  discountPrice?: number;
  currency: string;
};

export const SidebarPrice = (props: SidebarPriceProps) => {
  const {currency, price, discountPrice} = props;

  return (
    <Price>
      <DiscountPrice>
        {currency} {discountPrice ?? price * 10}
      </DiscountPrice>{' '}
      <Alert>
        {currency} {price}
      </Alert>
    </Price>
  );
};
