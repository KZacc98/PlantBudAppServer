import * as TypeGraphQL from "type-graphql";

export enum UserTokenScalarFieldEnum {
  userId = "userId",
  token = "token",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  expiresIn = "expiresIn"
}
TypeGraphQL.registerEnumType(UserTokenScalarFieldEnum, {
  name: "UserTokenScalarFieldEnum",
  description: undefined,
});
