import { makeExecutableSchema} from 'graphql-tools';
import schema from './graphql/schema.gql';
import {user,pet} from './resolvers';

const resolvers=[user,pet];

export default makeExecutableSchema({typeDefs:schema, resolvers: resolvers as any});