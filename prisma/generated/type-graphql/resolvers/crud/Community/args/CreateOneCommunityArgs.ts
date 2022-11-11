import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityCreateInput } from "../../../inputs/CommunityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityCreateInput, {
    nullable: false
  })
  data!: CommunityCreateInput;
}
