import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesWhereInput } from "../../../inputs/UserBadgesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  where?: UserBadgesWhereInput | undefined;
}
