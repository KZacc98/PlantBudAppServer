import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantOrderByWithAggregationInput } from "../../../inputs/PlantOrderByWithAggregationInput";
import { PlantScalarWhereWithAggregatesInput } from "../../../inputs/PlantScalarWhereWithAggregatesInput";
import { PlantWhereInput } from "../../../inputs/PlantWhereInput";
import { PlantScalarFieldEnum } from "../../../../enums/PlantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlantArgs {
  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  where?: PlantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlantOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlantOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "plantName" | "plantTypeId" | "plantImage" | "plantState" | "plantPlacement" | "createdAt" | "updatedAt" | "userId">;

  @TypeGraphQL.Field(_type => PlantScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlantScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
