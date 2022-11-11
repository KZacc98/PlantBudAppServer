import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeUpdateInput } from "../../../inputs/BadgeUpdateInput";
import { BadgeWhereUniqueInput } from "../../../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeUpdateInput, {
    nullable: false
  })
  data!: BadgeUpdateInput;

  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: false
  })
  where!: BadgeWhereUniqueInput;
}
