import {GraphQLJSON} from 'graphql-scalars';
import {asNexusMethod} from 'nexus';

export const JSON = asNexusMethod(GraphQLJSON, 'json');
