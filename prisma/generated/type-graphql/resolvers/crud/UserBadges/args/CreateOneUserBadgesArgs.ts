import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesCreateInput } from "../../../inputs/UserBadgesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesCreateInput, {
    nullable: false
  })
  data!: UserBadgesCreateInput;
}
