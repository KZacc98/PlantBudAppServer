import { gql } from 'apollo-server'
import { gender, userType } from '@prisma/client'

export const typeDefs = gql`
  type Query{
    users: [User]
  }

  type User {
    id: String!
    name: String!
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
    description: String
    isCompleted: Boolean!
    completedAt: String
    createdAt:String
    updatedAt: String
}

type Plant {
    id: String!
    plantName: String!
    plantType: PlantType
    plantImage: String
    careRoutine: CareRoutine
    plantState: String!
    plantPlacement: String
    user: [Plant]!
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
    commentBody: String
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
