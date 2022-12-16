import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import {maxDevice} from '../../styles';
import { Rating } from '../rating';

const Item = SC.div`
  min-height: 40vh;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 40px;
  margin: 20px 0;
  @media ${maxDevice.tablet} {
    margin: 10px 10px;
  }
`;
const StudentFeedbackText = SC.div`
  font-family: 'SF Pro Display Regular Italic';
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: left;
  color: #333333;
  margin-bottom: 30px;
`;
const FeedbackRow = SC.div`
  display: flex;
  align-items: center;
`;
const Avatar = SC.div`
  margin-right: 20px;
`;
const Info = SC.div`
  text-align: left;
`;
const UserName = SC.div`
  font-family: 'SF Pro Display Bold';
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #333333;
  margin-bottom: 10px;
`;
const UserTitle = SC.div`
  font-family: 'SF Pro Display';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #333333;
  opacity: 0.5;
`;

export const StudentFeedback = () => {
  return (
    <>
      <Grid container>
        <Grid key={'Davide Barnes'} item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Item>
            <Rating stars={5} />
            {/* <RatingTitle>{o.instagram}</RatingTitle> */}
            <StudentFeedbackText>
              A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its
              best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!
            </StudentFeedbackText>
            <FeedbackRow>
              <Avatar>
                <Image src={'/images/student_reviews_1.png'} height={80} width={80} alt="Student review image" />
              </Avatar>
              <Info>
                <UserName>Davide Barnes</UserName>
                <UserTitle>Novice disco dancer</UserTitle>
              </Info>
            </FeedbackRow>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
