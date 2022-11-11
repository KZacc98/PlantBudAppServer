import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeCreateInput } from "../../../inputs/BadgeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeCreateInput, {
    nullable: false
  })
  data!: BadgeCreateInput;
}
