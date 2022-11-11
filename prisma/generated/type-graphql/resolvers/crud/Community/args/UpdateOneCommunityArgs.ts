import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUpdateInput } from "../../../inputs/CommunityUpdateInput";
import { CommunityWhereUniqueInput } from "../../../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityUpdateInput, {
    nullable: false
  })
  data!: CommunityUpdateInput;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityWhereUniqueInput;
}
