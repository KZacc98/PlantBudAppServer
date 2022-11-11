import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCountOrderByAggregateInput } from "../inputs/PlantCountOrderByAggregateInput";
import { PlantMaxOrderByAggregateInput } from "../inputs/PlantMaxOrderByAggregateInput";
import { PlantMinOrderByAggregateInput } from "../inputs/PlantMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlantOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlantOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantTypeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantImage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantState?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plantPlacement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlantCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlantCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlantMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlantMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlantMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlantMinOrderByAggregateInput | undefined;
}
