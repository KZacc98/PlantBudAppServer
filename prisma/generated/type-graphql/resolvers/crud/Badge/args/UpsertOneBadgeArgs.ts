import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeCreateInput } from "../../../inputs/BadgeCreateInput";
import { BadgeUpdateInput } from "../../../inputs/BadgeUpdateInput";
import { BadgeWhereUniqueInput } from "../../../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: false
  })
  where!: BadgeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BadgeCreateInput, {
    nullable: false
  })
  create!: BadgeCreateInput;

  @TypeGraphQL.Field(_type => BadgeUpdateInput, {
    nullable: false
  })
  update!: BadgeUpdateInput;
}
