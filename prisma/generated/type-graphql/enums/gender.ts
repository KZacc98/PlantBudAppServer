import * as TypeGraphQL from "type-graphql";

export enum gender {
  male = "male",
  female = "female",
  other = "other",
  preferNotToTell = "preferNotToTell"
}
TypeGraphQL.registerEnumType(gender, {
  name: "gender",
  description: undefined,
});
