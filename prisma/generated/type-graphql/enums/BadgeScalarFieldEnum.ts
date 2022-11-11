import * as TypeGraphQL from "type-graphql";

export enum BadgeScalarFieldEnum {
  id = "id",
  badgeName = "badgeName",
  points = "points",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BadgeScalarFieldEnum, {
  name: "BadgeScalarFieldEnum",
  description: undefined,
});
