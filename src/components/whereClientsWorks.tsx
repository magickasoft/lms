import SC from '@emotion/styled';
import Image from 'next/image';

const CenterBlock = SC.div`
  display: flex;
  justify-content: center;
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

export const WhereClientsWorks = () => {
  return (
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
  );
};
