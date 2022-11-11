import * as TypeGraphQL from "type-graphql";

export enum userContentFlag {
  offfensive = "offfensive",
  useful = "useful",
  best = "best",
  "default" = "default"
}
TypeGraphQL.registerEnumType(userContentFlag, {
  name: "userContentFlag",
  description: undefined,
});
