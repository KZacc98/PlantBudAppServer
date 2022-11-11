import * as TypeGraphQL from "type-graphql";

export enum plantPlacement {
  inside = "inside",
  outside = "outside",
  "default" = "default"
}
TypeGraphQL.registerEnumType(plantPlacement, {
  name: "plantPlacement",
  description: undefined,
});
