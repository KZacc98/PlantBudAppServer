import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  userName = "userName",
  email = "email",
  phoneNumber = "phoneNumber",
  password = "password",
  gender = "gender",
  points = "points",
  userType = "userType",
  active = "active",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
