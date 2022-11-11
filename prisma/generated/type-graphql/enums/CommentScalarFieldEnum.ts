import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  postId = "postId",
  userId = "userId",
  commentBody = "commentBody",
  image = "image",
  points = "points",
  flag = "flag",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
