import SC from '@emotion/styled';
import Link from 'next/link';
import {useGlobalContext} from 'src/pages/[slug]';

const AuthorLink = SC(Link)`
  display: flex;
  align-items: center;
`;
const Author = SC.div`
`;
const AuthorName = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  font-size: 24px;
  color: #333333;
`;
const AuthorTitle = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-size: 16px;
  color: #808080;
`;

export const AuthorLogo = () => {
  const {course} = useGlobalContext();

  const AuthorImage = SC.div`
    background-image: url('/images/author_image_tempate.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-right: 20px; 
  `;

  const authorName = JSON.parse(course.author_info).filter(info => info.name);

  return (
    <AuthorLink href="/">
      <AuthorImage></AuthorImage>
      <Author>
        <AuthorName>{authorName[0].name}</AuthorName>
        <AuthorTitle>{authorName[0].about.substring(0, 50)}...</AuthorTitle>
      </Author>
    </AuthorLink>
  );
};
