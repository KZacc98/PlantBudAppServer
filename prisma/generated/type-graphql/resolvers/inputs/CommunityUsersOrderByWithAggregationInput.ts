import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCountOrderByAggregateInput } from "../inputs/CommunityUsersCountOrderByAggregateInput";
import { CommunityUsersMaxOrderByAggregateInput } from "../inputs/CommunityUsersMaxOrderByAggregateInput";
import { CommunityUsersMinOrderByAggregateInput } from "../inputs/CommunityUsersMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommunityUsersOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommunityUsersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  communityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommunityUsersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommunityUsersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommunityUsersMinOrderByAggregateInput | undefined;
}
