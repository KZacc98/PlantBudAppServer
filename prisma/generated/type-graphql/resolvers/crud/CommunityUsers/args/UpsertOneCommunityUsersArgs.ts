import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersCreateInput } from "../../../inputs/CommunityUsersCreateInput";
import { CommunityUsersUpdateInput } from "../../../inputs/CommunityUsersUpdateInput";
import { CommunityUsersWhereUniqueInput } from "../../../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersCreateInput, {
    nullable: false
  })
  create!: CommunityUsersCreateInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateInput, {
    nullable: false
  })
  update!: CommunityUsersUpdateInput;
}
