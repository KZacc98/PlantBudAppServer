import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeCreateOrConnectWithoutPlantsInput } from "../inputs/PlantTypeCreateOrConnectWithoutPlantsInput";
import { PlantTypeCreateWithoutPlantsInput } from "../inputs/PlantTypeCreateWithoutPlantsInput";
import { PlantTypeWhereUniqueInput } from "../inputs/PlantTypeWhereUniqueInput";

@TypeGraphQL.InputType("PlantTypeCreateNestedOneWithoutPlantsInput", {
  isAbstract: true
})
export class PlantTypeCreateNestedOneWithoutPlantsInput {
  @TypeGraphQL.Field(_type => PlantTypeCreateWithoutPlantsInput, {
    nullable: true
  })
  create?: PlantTypeCreateWithoutPlantsInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeCreateOrConnectWithoutPlantsInput, {
    nullable: true
  })
  connectOrCreate?: PlantTypeCreateOrConnectWithoutPlantsInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: PlantTypeWhereUniqueInput | undefined;
}
