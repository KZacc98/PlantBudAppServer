import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeWhereInput } from "../../../inputs/BadgeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  where?: BadgeWhereInput | undefined;
}
