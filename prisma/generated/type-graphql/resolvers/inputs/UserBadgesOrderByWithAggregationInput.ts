import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCountOrderByAggregateInput } from "../inputs/UserBadgesCountOrderByAggregateInput";
import { UserBadgesMaxOrderByAggregateInput } from "../inputs/UserBadgesMaxOrderByAggregateInput";
import { UserBadgesMinOrderByAggregateInput } from "../inputs/UserBadgesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserBadgesOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserBadgesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  badgeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserBadgesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserBadgesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserBadgesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserBadgesMinOrderByAggregateInput | undefined;
}
