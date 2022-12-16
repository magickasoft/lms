import SC from '@emotion/styled';
import Image from 'next/image';

import {Rating} from '../rating';

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
const CenterBlock = SC.div`
  display: flex;
  justify-content: center;
`;
const RatingHorizontalBox = SC.div`
  display: flex;
  max-width: 500px;
  background: #FFFFFF;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 14px;
`;
const CompaniesBox = SC.div`
  width: 370px;
`;
const CompaniesText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #808080;
  // display: flex;
  margin-bottom: 20px;
`;
const CompaniesImages = SC.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;

  margin-bottom: 20px;
`;
const CompanyImage = SC(Image)`
  
`;
const RatingText = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  margin-left: 10px;
`;
const ImagesLine = SC.div`
  display: flex;
  margin: 10px;
`;
const RatingImage1 = SC(Image)`
  position: relative;
  left: 32px;
`;
const RatingImage2 = SC(Image)`
  position: relative;
  left: 24px;
`;
const RatingImage3 = SC(Image)`
  position: relative;
  left: 16px;
`;
const RatingImage4 = SC(Image)`
  position: relative;
  left: 8px;
`;
const RatingImage5 = SC(Image)`
  position: relative;
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

      <CenterBlock>
        <RatingHorizontalBox>
          <Rating stars={4} />
          <RatingText>Rating {rating} / 321 reviews</RatingText>
          <ImagesLine>
            <RatingImage1 src={'/images/rating_1.png'} height={36} width={36} alt="Rating image" />
            <RatingImage2 src={'/images/rating_2.png'} height={36} width={36} alt="Rating image" />
            <RatingImage3 src={'/images/rating_3.png'} height={36} width={36} alt="Rating image" />
            <RatingImage4 src={'/images/rating_4.png'} height={36} width={36} alt="Rating image" />
            <RatingImage5 src={'/images/rating_5.png'} height={36} width={36} alt="Rating image" />
          </ImagesLine>
        </RatingHorizontalBox>
      </CenterBlock>
      <CenterBlock>
        <CompaniesBox>
          <CompaniesText>Companies where our clients work:</CompaniesText>
          <CompaniesImages>
            <CompanyImage src={'/images/company_apple.png'} height={28} width={28} alt="Company image" />
            <CompanyImage src={'/images/company_ms.png'} height={32} width={26} alt="Company image" />
            <CompanyImage src={'/images/company_amazon.png'} height={27} width={33} alt="Company image" />
            <CompanyImage src={'/images/company_cola.png'} height={28} width={52} alt="Company image" />
            <CompanyImage src={'/images/company_google.png'} height={27} width={26} alt="Company image" />
          </CompaniesImages>
        </CompaniesBox>
      </CenterBlock>
    </Container>
  );
};
