import {extendType, list, nonNull, objectType, stringArg} from 'nexus';

import {getCoursesResolver} from '../resolvers/coursesResolvers';

export const getCourses = extendType({
  type: 'Query',
  definition: t => {
    t.field('getCourses', {
      type: list(course),
      resolve: getCoursesResolver,
    });
  },
});

const course = objectType({
  name: 'course',
  definition: t => {
    t.bigint('id');
    t.string('title');
    t.string('slug');
    t.bigint('author_id');
  },
});
