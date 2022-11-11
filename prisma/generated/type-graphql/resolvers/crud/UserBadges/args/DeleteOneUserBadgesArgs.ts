import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesWhereUniqueInput } from "../../../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;
}
