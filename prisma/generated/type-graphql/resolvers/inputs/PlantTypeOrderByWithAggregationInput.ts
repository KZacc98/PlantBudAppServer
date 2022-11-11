import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeCountOrderByAggregateInput } from "../inputs/PlantTypeCountOrderByAggregateInput";
import { PlantTypeMaxOrderByAggregateInput } from "../inputs/PlantTypeMaxOrderByAggregateInput";
import { PlantTypeMinOrderByAggregateInput } from "../inputs/PlantTypeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlantTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlantTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlantTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlantTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlantTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlantTypeMinOrderByAggregateInput | undefined;
}
