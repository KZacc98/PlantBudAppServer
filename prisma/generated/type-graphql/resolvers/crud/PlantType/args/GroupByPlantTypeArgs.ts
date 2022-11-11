import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeOrderByWithAggregationInput } from "../../../inputs/PlantTypeOrderByWithAggregationInput";
import { PlantTypeScalarWhereWithAggregatesInput } from "../../../inputs/PlantTypeScalarWhereWithAggregatesInput";
import { PlantTypeWhereInput } from "../../../inputs/PlantTypeWhereInput";
import { PlantTypeScalarFieldEnum } from "../../../../enums/PlantTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  where?: PlantTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlantTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "species" | "type" | "description" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PlantTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlantTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
