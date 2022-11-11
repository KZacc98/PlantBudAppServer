import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeCreateWithoutPlantsInput } from "../inputs/PlantTypeCreateWithoutPlantsInput";
import { PlantTypeUpdateWithoutPlantsInput } from "../inputs/PlantTypeUpdateWithoutPlantsInput";

@TypeGraphQL.InputType("PlantTypeUpsertWithoutPlantsInput", {
  isAbstract: true
})
export class PlantTypeUpsertWithoutPlantsInput {
  @TypeGraphQL.Field(_type => PlantTypeUpdateWithoutPlantsInput, {
    nullable: false
  })
  update!: PlantTypeUpdateWithoutPlantsInput;

  @TypeGraphQL.Field(_type => PlantTypeCreateWithoutPlantsInput, {
    nullable: false
  })
  create!: PlantTypeCreateWithoutPlantsInput;
}
