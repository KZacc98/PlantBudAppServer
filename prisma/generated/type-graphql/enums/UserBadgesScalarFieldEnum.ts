import * as TypeGraphQL from "type-graphql";

export enum UserBadgesScalarFieldEnum {
  userId = "userId",
  badgeId = "badgeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserBadgesScalarFieldEnum, {
  name: "UserBadgesScalarFieldEnum",
  description: undefined,
});
