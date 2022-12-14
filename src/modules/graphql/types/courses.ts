import {extendType, list, objectType} from 'nexus';

import {getCoursesResolver, getPopularCoursesResolver, getTopCoursesResolver} from '../resolvers/coursesResolvers';

export const getCourses = extendType({
  type: 'Query',
  definition: t => {
    t.field('getCourses', {
      type: list(course),
      resolve: getCoursesResolver,
    });
  },
});

export const getPopularCourses = extendType({
  type: 'Query',
  definition: t => {
    t.field('getPopularCourses', {
      type: list(course),
      resolve: getPopularCoursesResolver,
    });
  },
});

export const getTopCourses = extendType({
  type: 'Query',
  definition: t => {
    t.field('getTopCourses', {
      type: list(course),
      resolve: getTopCoursesResolver,
    });
  },
});

const course = objectType({
  name: 'course',
  definition: t => {
    t.bigint('id');
    t.string('title');
    t.string('slug');
    t.string('price');
    t.string('lang');
    t.json('author_info');
    t.list.field('media', {
      type: mediaObjectType,
      resolve(parent: any, args, ctx) {
        return parent.media;
        // return ctx.getCourses(root.id).media()
      },
    });
    t.string('image');
  },
});

const mediaObjectType = objectType({
  name: 'media',
  definition: t => {
    t.bigint('id');
    t.string('uuid');
    t.string('collection_name');
    t.string('file_name');
    t.json('generated_conversions');
  },
});
