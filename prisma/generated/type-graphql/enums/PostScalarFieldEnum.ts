import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  communityId = "communityId",
  userId = "userId",
  postBody = "postBody",
  image = "image",
  points = "points",
  flag = "flag",
  isAnnouncement = "isAnnouncement",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
