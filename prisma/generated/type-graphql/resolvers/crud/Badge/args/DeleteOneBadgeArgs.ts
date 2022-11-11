import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeWhereUniqueInput } from "../../../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: false
  })
  where!: BadgeWhereUniqueInput;
}
