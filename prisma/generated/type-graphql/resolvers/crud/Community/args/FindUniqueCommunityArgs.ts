import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityWhereUniqueInput } from "../../../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityWhereUniqueInput;
}
