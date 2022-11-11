import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersOrderByWithRelationInput } from "../../../inputs/CommunityUsersOrderByWithRelationInput";
import { CommunityUsersWhereInput } from "../../../inputs/CommunityUsersWhereInput";
import { CommunityUsersWhereUniqueInput } from "../../../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  where?: CommunityUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CommunityUsersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommunityUsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
