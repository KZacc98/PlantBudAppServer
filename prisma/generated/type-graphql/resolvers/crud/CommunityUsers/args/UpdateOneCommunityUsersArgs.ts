import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersUpdateInput } from "../../../inputs/CommunityUsersUpdateInput";
import { CommunityUsersWhereUniqueInput } from "../../../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersUpdateInput, {
    nullable: false
  })
  data!: CommunityUsersUpdateInput;

  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;
}
