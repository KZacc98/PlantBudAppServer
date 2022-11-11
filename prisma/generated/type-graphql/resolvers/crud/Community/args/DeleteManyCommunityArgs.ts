import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityWhereInput } from "../../../inputs/CommunityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  where?: CommunityWhereInput | undefined;
}
