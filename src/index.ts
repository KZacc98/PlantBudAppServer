const { ApolloServer } = require('apollo-server');
import "reflect-metadata";
import { PrismaClient } from '@prisma/client'
import { resolvers } from '../node_modules/@generated/type-graphql'
import { buildSchema } from 'type-graphql';


const prisma = new PrismaClient();

async function bootstrap() {
    const schema = await buildSchema({
        resolvers,
        validate: false,
    });
  
    const server = new ApolloServer({
        schema,
        resolvers,
        context: () => ({ prisma }),
    });
    
    server.listen().then(({ url }: { url: string }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
  }
  
  bootstrap(); 




