import SC from '@emotion/styled';
import Link from 'next/link';

import {Page} from '../components';
import {Icon} from '../components/icon';
import {maxDevice} from '../styles';

const Title = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 72px;
  color: #1f2326;
  @media ${maxDevice.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 30px;
    line-height: 36px;
  }
`;
const Text = SC.div`
  width: 560px;
  margin-top: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #22262A;
  @media ${maxDevice.tablet} {
    width: 370px;
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
  @media ${maxDevice.mobileL} {
    width: auto;
    margin-top: 30px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const NotFound = SC(Icon)`
  @media ${maxDevice.mobileL} {
    width: 90%;
  }
`;
const Img = SC.div`
  display: flex;
  justify-content: flex-end;
`;

function NotFoundPage() {
  return (
    <Page>
      <div>
        <Title>{`Этой страницы \nне существует`}</Title>
        <Text>
          Вы перешли по неверной ссылке, либо эта страница была удалена.&nbsp;
          <Link rel="canonical" href="/" passHref>
            Начните с главной страницы
          </Link>
        </Text>
      </div>
      <Img>
        <NotFound name="notFound" size="260" />
      </Img>
    </Page>
  );
}

export default NotFoundPage;
