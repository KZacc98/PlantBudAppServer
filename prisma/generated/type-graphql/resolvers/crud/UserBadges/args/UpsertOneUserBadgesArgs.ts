import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesCreateInput } from "../../../inputs/UserBadgesCreateInput";
import { UserBadgesUpdateInput } from "../../../inputs/UserBadgesUpdateInput";
import { UserBadgesWhereUniqueInput } from "../../../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesCreateInput, {
    nullable: false
  })
  create!: UserBadgesCreateInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateInput, {
    nullable: false
  })
  update!: UserBadgesUpdateInput;
}
