import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersOrderByWithAggregationInput } from "../../../inputs/CommunityUsersOrderByWithAggregationInput";
import { CommunityUsersScalarWhereWithAggregatesInput } from "../../../inputs/CommunityUsersScalarWhereWithAggregatesInput";
import { CommunityUsersWhereInput } from "../../../inputs/CommunityUsersWhereInput";
import { CommunityUsersScalarFieldEnum } from "../../../../enums/CommunityUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  where?: CommunityUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommunityUsersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "communityId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CommunityUsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommunityUsersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
