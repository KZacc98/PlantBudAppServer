import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeUpdateManyMutationInput } from "../../../inputs/BadgeUpdateManyMutationInput";
import { BadgeWhereInput } from "../../../inputs/BadgeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeUpdateManyMutationInput, {
    nullable: false
  })
  data!: BadgeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  where?: BadgeWhereInput | undefined;
}
