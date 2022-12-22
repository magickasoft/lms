import SC from '@emotion/styled';
import Image from 'next/image';

import {AuthorLogo} from './authorLogo';

const Container = SC.div``;
const CourseBigTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 110%;
  color: #333333;
  margin-bottom: 30px;
`;
const Author = SC.div`
  margin-bottom: 30px;
`;
const AuthorInfo = SC.div`
  margin-bottom: 60px;
`;
const MoneyBackGuarantee = SC.div`
  background: linear-gradient(90deg, #FF5D5D 0%, #FFB648 100%);
  border-radius: 12px;
  padding: 60px; 100px;
  margin-bottom: 60px;
`;
const MoneyBackGuaranteeBox = SC.div`
  display: flex;
  background: #FFFFFF;
  border-radius: 12px;
`;
const BoxText = SC.div`
  padding: 40px;
`;
const BoxTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #333333;
  margin-bottom: 20px;
`;
const BoxDescription = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #333333;
`;
const BoxImage = SC(Image)`
  margin: 40px  40px 40px 0;
`;
const TextWithBr = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 10px;
`;

export const MeetAuthor = () => {
  return (
    <Container>
      <CourseBigTitle>Meet course author</CourseBigTitle>

      <Author>
        <AuthorLogo />
      </Author>

      <AuthorInfo>
        <TextWithBr>
          Specialist in the field of biohacking and brain improvement. Actress of cinema and theater. He writes poetry
          and prose, scripts, publishes books.
        </TextWithBr>
        <TextWithBr>
          Victoria noticed how quickly her memory could deteriorate after 35 years, when it became difficult for her to
          remember a large amount of information and text that was required for her work in cinema and theater. What was
          easy 5 years ago has become very difficult. It seemed that memory became like a sieve through which everything
          that was being studied flowed without a trace.
        </TextWithBr>
      </AuthorInfo>

      <MoneyBackGuarantee>
        <MoneyBackGuaranteeBox>
          <BoxText>
            <BoxTitle>100% money back guarantee within 14 days</BoxTitle>
            <BoxDescription>
              You are in a safe place. Sacrill award winning support team always on a customer side. In case you’ll be
              unsatisfied with this program, you get full refund no question asked. Just send us a message to
              hello@sacrill.com
            </BoxDescription>
          </BoxText>
          <BoxImage src={'/images/money_back.png'} alt="Money back image" width={132} height={108} />
        </MoneyBackGuaranteeBox>
      </MoneyBackGuarantee>
    </Container>
  );
};
