import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeOrderByWithAggregationInput } from "../../../inputs/BadgeOrderByWithAggregationInput";
import { BadgeScalarWhereWithAggregatesInput } from "../../../inputs/BadgeScalarWhereWithAggregatesInput";
import { BadgeWhereInput } from "../../../inputs/BadgeWhereInput";
import { BadgeScalarFieldEnum } from "../../../../enums/BadgeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  where?: BadgeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BadgeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BadgeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BadgeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "badgeName" | "points" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BadgeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BadgeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
