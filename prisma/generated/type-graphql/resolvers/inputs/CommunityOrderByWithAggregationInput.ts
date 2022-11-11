import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCountOrderByAggregateInput } from "../inputs/CommunityCountOrderByAggregateInput";
import { CommunityMaxOrderByAggregateInput } from "../inputs/CommunityMaxOrderByAggregateInput";
import { CommunityMinOrderByAggregateInput } from "../inputs/CommunityMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommunityOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommunityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  communityName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommunityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommunityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommunityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommunityMinOrderByAggregateInput | undefined;
}
