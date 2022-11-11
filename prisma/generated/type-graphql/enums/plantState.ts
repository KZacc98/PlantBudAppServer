import * as TypeGraphQL from "type-graphql";

export enum plantState {
  thriving = "thriving",
  good = "good",
  needsAttention = "needsAttention",
  thirsty = "thirsty",
  forgotten = "forgotten",
  dead = "dead",
  "default" = "default"
}
TypeGraphQL.registerEnumType(plantState, {
  name: "plantState",
  description: undefined,
});
