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

  return (
    <Container>
      {[...Array(stars)].map((key: number, index: number) => (
        <StarIcon key={index}>
          <Icon name="star" width={13} height={12} />
        </StarIcon>
      ))}
    </Container>
  );
};
