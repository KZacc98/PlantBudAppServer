import * as TypeGraphQL from "type-graphql";

export enum userType {
  user = "user",
  admin = "admin"
}
TypeGraphQL.registerEnumType(userType, {
  name: "userType",
  description: undefined,
});
