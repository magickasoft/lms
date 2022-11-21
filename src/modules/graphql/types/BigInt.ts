import {GraphQLBigInt} from 'graphql-scalars';
import {asNexusMethod} from 'nexus';

export const BigInt = asNexusMethod(GraphQLBigInt, 'bigint');
