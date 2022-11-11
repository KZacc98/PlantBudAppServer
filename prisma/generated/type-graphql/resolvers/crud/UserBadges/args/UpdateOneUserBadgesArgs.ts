import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesUpdateInput } from "../../../inputs/UserBadgesUpdateInput";
import { UserBadgesWhereUniqueInput } from "../../../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesUpdateInput, {
    nullable: false
  })
  data!: UserBadgesUpdateInput;

  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;
}
