const { ApolloServer } = require('apollo-server');
import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import { PrismaClient } from '@prisma/client'

import UserAPI from './datasources/user';
import ProjectAPI from './datasources/project';


const store = new PrismaClient();

const dataSources = () => ({
    userAPI: new UserAPI({ store }),
    projectAPI: new ProjectAPI({ store })
})

const context = async ({ req }:{ req: any }) => {
    return null;
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
});

