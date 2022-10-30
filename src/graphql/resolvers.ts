import { gender } from '@prisma/client';
import { dataSources } from '../types';


export const resolvers = {
    Query: {
        allUsers: async (_: any, __: any, { dataSources }: { dataSources: dataSources }) => {
            const allUsers = await dataSources.userAPI.getAllUsers();
            return allUsers
        },

        userByMail: async (_: any, args: { email: String; }, { dataSources }: { dataSources: dataSources }) => {
            const user = await dataSources.userAPI.getUserByEmail(args.email)
            return user
        },

        userPlants: async (_: any, args: { userId: String; }, { dataSources }: { dataSources: dataSources }) => {
            const userPlants = await dataSources.userAPI.getUserPlants(args.userId)
            return userPlants
        },
        // projects: async (_: any, __: any, { dataSources }: { dataSources: dataSources}) => {
        //     const allProjects = await dataSources.projectAPI.getProjects()
        //     return allProjects
        // },
    },
    Mutation: {
        createUser: async (_: any, args: {
            name: String,
            userName: String,
            email: String,
            password: String,
            phoneNumber: String,
            userGender: string
        }, { dataSources }: { dataSources: dataSources }) => {
            const user = await dataSources.userAPI.createNewUser(
                args.name,
                args.userName,
                args.email,
                args.password,
                args.phoneNumber,
                args.userGender as gender
            )
            return user
        },
        deleteUser: async (_: any, args: {userId: String}, { dataSources }: { dataSources: dataSources }) => {
            const deletedUser = await dataSources.userAPI.deleteUser(args.userId)
            return deletedUser
        },
    }
};
