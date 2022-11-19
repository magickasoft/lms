import {ApolloServer} from 'apollo-server-micro';

import {schema} from '../modules/graphql/schema';
import {prisma} from './prisma';

const server = new ApolloServer({
  schema,
  context: ({req, res}) => ({req, res, prisma}),
});

export {server};
