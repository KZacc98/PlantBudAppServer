import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query{
    allUsers: [User]
    userByMail(email: String!): User!
    userPlants(userId: String!): [Plant]!
  }
  
  type Mutation {
    createUser(
        name: String!
        userName: String!
        email: String!
        password: String!
        phoneNumber: String,
        userGender: String
    ): User!
    deleteUser(userId: String!): User!
  }
  

  type User {
    id: String!
    name: String!
    userName: String!
    email: String!
    phoneNumber: String
    password: String!
    gender: String!
    plants: [Plant]!
    badges: [Badge]!
    communities: [Community]!
    posts: [Post]!
    comments: [Comment]!
    points: Int!
    userType: String!
    active: Boolean!
    createdAt:String
    updatedAt: String
}

type CareRoutine {
    id: String!
    plantId: String!
    routineSteps: [RoutineStep]!
    isCompleted: Boolean!
    isActive: Boolean!
    isShared: Boolean!
    flag: String!
    createdAt:String
    updatedAt: String
}
type RoutineStep {
    id: String!
    careRoutineId: String!
    description: String
    stepFrequency: String!
    otherFrequency: String
    isCompleted: Boolean!
    completedAt: String
    createdAt:String
    updatedAt: String
}

type Plant {
    id: String!
    plantName: String!
    plantTypeId: String!
    plantImage: String
    careRoutine: CareRoutine
    plantState: String!
    plantPlacement: String
    userId: String! 
    createdAt:String
    updatedAt: String

}

type PlantType {
    id: String!
    species: String
    type: String
    description: String
    createdAt:String
    updatedAt: String
}

type Community {
    id: String!
    communityName: String!
    posts: [Post]!
    users: [User]!
    isActive: Boolean!
    createdAt:String
    updatedAt: String
}

type Post {
    id: String!
    communityId: String!
    userId: String!
    postBody: String
    comments: [Comment]!
    image: String
    flag: String!
    isAnnouncement: Boolean
    createdAt:String
    updatedAt: String

}
type Comment {
    id: String!
    postId: String!
    userId: String!
    commentBody: String!
    image: String
    points: Int
    flag: String
    createdAt:String
    updatedAt: String

}
type Badge {
    id: String!
    badgeName: String!
    points: Int!
    users: [User]!
    createdAt:String
    updatedAt: String
}
`
