import SC from '@emotion/styled';

const Container = SC.div`
  background: #F5F5F5;
  border-radius: 12px;
  padding: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 160px;
`;
const LeftImage = SC.div`
  background: #D9D9D9;
  border-radius: 50px;
  width: 98px;
  height: 98px;
  margin-right: 30px;
`;
const RightText = SC.div`
  display: flex;
  flex-direction: column;
  height: 98px;
`;
const Text = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
`;
const BoxDescription = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #333333;
`;

export const GraySupportBlock = () => {
  return (
    <Container>
      <LeftImage></LeftImage>
      <RightText>
        <Text>Kate Fox — Customer Happiness Manager</Text>
        <BoxDescription>
          Our award-winning Customer Satisfaction Team is ready to help via online chat or email at hello@sacrill.com
        </BoxDescription>
      </RightText>
    </Container>
  );
};
