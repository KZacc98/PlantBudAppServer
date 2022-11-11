import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCountOrderByAggregateInput } from "../inputs/CareRoutineCountOrderByAggregateInput";
import { CareRoutineMaxOrderByAggregateInput } from "../inputs/CareRoutineMaxOrderByAggregateInput";
import { CareRoutineMinOrderByAggregateInput } from "../inputs/CareRoutineMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CareRoutineOrderByWithAggregationInput", {
  isAbstract: true
})
export class CareRoutineOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isCompleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isShared?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flag?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CareRoutineCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CareRoutineCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CareRoutineMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CareRoutineMinOrderByAggregateInput | undefined;
}
