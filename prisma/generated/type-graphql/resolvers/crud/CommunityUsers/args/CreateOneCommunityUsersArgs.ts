import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersCreateInput } from "../../../inputs/CommunityUsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersCreateInput, {
    nullable: false
  })
  data!: CommunityUsersCreateInput;
}
