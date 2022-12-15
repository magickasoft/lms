import SC from '@emotion/styled';

import {Icon} from './icon';

const Container = SC.div`
    display: flex;
`;
const StarIcon = SC.div`
    margin-right: 3px;
`;

type RatingProps = {
  stars: number;
};

export const Rating = (props: RatingProps) => {
  const {stars} = props;

  [...Array(5)].map((key: number, index: number) =>
    console.log('key', index, index + 1 <= stars ? true : false, index + 1 <= stars ? '#FFA51E' : '#808080'),
  );

  return (
    <Container>
      {[...Array(5)].map((key: number, index: number) => {
        return (
          <StarIcon key={index}>
            <Icon name="star" width={13} height={12} color={index + 1 <= stars ? '#FFA51E' : '#808080'} />
          </StarIcon>
        );
      })}
    </Container>
  );
};
