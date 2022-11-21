import {FieldResolver} from 'nexus';

import {isAuth} from '../../utils/auth';

export const getCoursesResolver: FieldResolver<'Query', 'getCourses'> = async (_, __, {prisma, req}) => {
  // await isAuth(req);
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return [...courses];

  // return [...courses].map(post => ({
  //   ...post,
  //   author: {
  //     ...post.author,
  //     memberSince: post.author.memberSince.toDateString(),
  //   },
  // }));
};
