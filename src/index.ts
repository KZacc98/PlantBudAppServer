const { ApolloServer } = require('apollo-server');
import "reflect-metadata";
import { PrismaClient } from '@prisma/client'
import { resolvers } from '../prisma/generated/type-graphql'
import { buildSchema } from 'type-graphql';
import { register } from "./customres/register";
import { login } from "./customres/login";


const prisma = new PrismaClient();

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [...resolvers, register, login],
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




