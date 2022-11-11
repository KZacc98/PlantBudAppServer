import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityCreateInput } from "../../../inputs/CommunityCreateInput";
import { CommunityUpdateInput } from "../../../inputs/CommunityUpdateInput";
import { CommunityWhereUniqueInput } from "../../../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityCreateInput, {
    nullable: false
  })
  create!: CommunityCreateInput;

  @TypeGraphQL.Field(_type => CommunityUpdateInput, {
    nullable: false
  })
  update!: CommunityUpdateInput;
}
