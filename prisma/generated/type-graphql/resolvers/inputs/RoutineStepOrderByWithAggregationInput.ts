import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCountOrderByAggregateInput } from "../inputs/RoutineStepCountOrderByAggregateInput";
import { RoutineStepMaxOrderByAggregateInput } from "../inputs/RoutineStepMaxOrderByAggregateInput";
import { RoutineStepMinOrderByAggregateInput } from "../inputs/RoutineStepMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RoutineStepOrderByWithAggregationInput", {
  isAbstract: true
})
export class RoutineStepOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  careRoutineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stepFrequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  otherFrequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isCompleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  completedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RoutineStepCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RoutineStepCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoutineStepMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RoutineStepMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoutineStepMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RoutineStepMinOrderByAggregateInput | undefined;
}
