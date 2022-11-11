import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersWhereUniqueInput } from "../../../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;
}
