import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityOrderByWithAggregationInput } from "../../../inputs/CommunityOrderByWithAggregationInput";
import { CommunityScalarWhereWithAggregatesInput } from "../../../inputs/CommunityScalarWhereWithAggregatesInput";
import { CommunityWhereInput } from "../../../inputs/CommunityWhereInput";
import { CommunityScalarFieldEnum } from "../../../../enums/CommunityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  where?: CommunityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommunityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommunityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "communityName" | "isActive" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CommunityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommunityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
