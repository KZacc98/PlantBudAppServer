import * as TypeGraphQL from "type-graphql";

export enum CommunityScalarFieldEnum {
  id = "id",
  communityName = "communityName",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommunityScalarFieldEnum, {
  name: "CommunityScalarFieldEnum",
  description: undefined,
});
