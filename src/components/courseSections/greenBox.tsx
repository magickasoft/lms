import SC from '@emotion/styled';
import Image from 'next/image';

import {RatingHorizontal} from '../ratingHorizontal';
import {WhereClientsWorks} from '../whereClientsWorks';

const Container = SC.div`
  margin-top: 60px;
  width: 100%;
  padding: 60px;
  background: rgba(115, 195, 113, 0.1);
  border: 2px dashed #73C371;
  border-radius: 12px;
  margin-bottom: 60px;
`;
const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
`;
const Includes = SC.div`
  margin-top: 30px;
  margin-bottom: 40px;
`;
const IncludeItem = SC.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
`;
const IncludeText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: left;
  color: #333333;
  margin-left: 13px;
`;

export const GreenBox = (props: any) => {
  const {rating} = props;

  return (
    <Container>
      <Text>
        Victoria has developed a unique technique for pumping the brain, including neurohymnastics, mnemonics to
        increase memory, exercises for the development of mental abilities and theoretical information. She will show
        you how to use simple techniques:
      </Text>

      <Includes>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>Make the mind more tenacious, as in youth.</Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>It is easier to choose words, react faster, solve problems and make decisions.</Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>Memorize and assimilate new information faster.</Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>
              Be more concentrated, diligent, understand the essence of what you read at once, and not re-read several
              times.
            </Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>Develop creativity.</Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>Cope more effectively with tasks at work and at home.</Text>
          </IncludeText>
        </IncludeItem>
        <IncludeItem>
          <Image src={'/images/mark_yes.svg'} height={12} width={17} alt="Mark image" />
          <IncludeText>
            <Text>Improve any of your activities.</Text>
          </IncludeText>
        </IncludeItem>
      </Includes>

      <RatingHorizontal rating={rating} color="#FFFFFF" />

      <WhereClientsWorks />
    </Container>
  );
};
