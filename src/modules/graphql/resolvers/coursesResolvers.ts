import {FieldResolver} from 'nexus';
import { Collection } from 'nexus-prisma';

export const getCoursesResolver: FieldResolver<'Query', 'courses'> = async (_, __, {prisma, req}) => {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      author_info: true,
      price: true,
      lang: true,
      media: {
        select: {
          id: true,
          uuid: true,
          collection_name: true,
          file_name: true,
          generated_conversions: true
        },
        where: {
          model_type: "App\\Models\\Course",
          collection_name: "file__course_thumb"
        }
      }
    },
    where: {
      status: 1
    },
    take: 15,
    orderBy: {
      id: 'desc',
    },
  });

  // return [...courses];

  return [...courses].map(course => ({
    ...course,
    image: course.media[0].file_name
  }));
};

export const getPopularCoursesResolver: FieldResolver<'Query', 'courses'> = async (_, __, {prisma, req}) => {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      author_info: true,
      price: true,
      lang: true,
      media: {
        select: {
          id: true,
          uuid: true,
          collection_name: true,
          file_name: true,
          generated_conversions: true
        },
        where: {
          model_type: "App\\Models\\Course",
          collection_name: "file__course_thumb"
        }
      }
    },
    where: {
      id: {
        in: [69, 228, 133, 91, 405, 357, 440, 429, 167, 516, 515, 569, 193, 490, 555, 620, 147, 89, 314, 531, 199]
      },
      status: 1,
      // collection: {
      //   every: {
      //     collection_id: 2
      //   }
      // }
      // CollectionCourse: {
      //   where: {
          
      //   },
      //   some: {
      //     collection_id: 2

      //     // prisma:query SELECT `edston`.`courses`.`id`, `edston`.`courses`.`title`, `edston`.`courses`.`slug`, `edston`.`courses`.`author_info`, `edston`.`courses`.`price`, `edston`.`courses`.`lang` FROM `edston`.`courses` WHERE `edston`.`courses`.`status` = ? ORDER BY `edston`.`courses`.`id` DESC LIMIT ? OFFSET ?
      //     // prisma:query SELECT `edston`.`courses`.`id`, `edston`.`courses`.`title`, `edston`.`courses`.`slug`, `edston`.`courses`.`author_info`, `edston`.`courses`.`price`, `edston`.`courses`.`lang` FROM `edston`.`courses` WHERE (`edston`.`courses`.`status` = ? AND (`edston`.`courses`.`id`) IN (SELECT `t0`.`id` FROM `edston`.`courses` AS `t0` INNER JOIN `edston`.`collection_course` AS `j0` ON (`j0`.`course_id`) = (`t0`.`id`) WHERE (`j0`.`collection_id` = ? AND `t0`.`id` IS NOT NULL))) ORDER BY `edston`.`courses`.`id` DESC LIMIT ? OFFSET ?
      //     // prisma:query SELECT `edston`.`courses`.`id`, `edston`.`courses`.`title`, `edston`.`courses`.`slug`, `edston`.`courses`.`author_info`, `edston`.`courses`.`price`, `edston`.`courses`.`lang` FROM `edston`.`courses` WHERE (`edston`.`courses`.`status` = ? AND (`edston`.`courses`.`id`) NOT IN (SELECT `t0`.`id` FROM `edston`.`courses` AS `t0` INNER JOIN `edston`.`collection_course` AS `j0` ON (`j0`.`course_id`) = (`t0`.`id`) WHERE ((NOT `j0`.`collection_id` = ?) AND `t0`.`id` IS NOT NULL))) ORDER BY `edston`.`courses`.`id` DESC LIMIT ? OFFSET ?

      //   },
      // }
    },
    take: 25,
    orderBy: {
      id: 'asc',
    },
  });

  // return [...courses];

  return [...courses].map(course => ({
    ...course,
    image: course.media[0].file_name
  }));
};
