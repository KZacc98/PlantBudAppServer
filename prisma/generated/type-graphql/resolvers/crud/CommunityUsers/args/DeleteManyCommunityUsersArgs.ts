import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersWhereInput } from "../../../inputs/CommunityUsersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  where?: CommunityUsersWhereInput | undefined;
}
