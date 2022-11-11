import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeAvgOrderByAggregateInput } from "../inputs/BadgeAvgOrderByAggregateInput";
import { BadgeCountOrderByAggregateInput } from "../inputs/BadgeCountOrderByAggregateInput";
import { BadgeMaxOrderByAggregateInput } from "../inputs/BadgeMaxOrderByAggregateInput";
import { BadgeMinOrderByAggregateInput } from "../inputs/BadgeMinOrderByAggregateInput";
import { BadgeSumOrderByAggregateInput } from "../inputs/BadgeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BadgeOrderByWithAggregationInput", {
  isAbstract: true
})
export class BadgeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  badgeName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  points?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BadgeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BadgeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BadgeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BadgeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BadgeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BadgeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BadgeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BadgeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BadgeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BadgeSumOrderByAggregateInput | undefined;
}
