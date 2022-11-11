import * as TypeGraphQL from "type-graphql";

export enum CommunityUsersScalarFieldEnum {
  userId = "userId",
  communityId = "communityId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommunityUsersScalarFieldEnum, {
  name: "CommunityUsersScalarFieldEnum",
  description: undefined,
});
