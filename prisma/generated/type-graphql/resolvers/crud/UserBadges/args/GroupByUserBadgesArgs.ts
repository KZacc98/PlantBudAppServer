import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesOrderByWithAggregationInput } from "../../../inputs/UserBadgesOrderByWithAggregationInput";
import { UserBadgesScalarWhereWithAggregatesInput } from "../../../inputs/UserBadgesScalarWhereWithAggregatesInput";
import { UserBadgesWhereInput } from "../../../inputs/UserBadgesWhereInput";
import { UserBadgesScalarFieldEnum } from "../../../../enums/UserBadgesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  where?: UserBadgesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserBadgesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "badgeId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => UserBadgesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserBadgesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
