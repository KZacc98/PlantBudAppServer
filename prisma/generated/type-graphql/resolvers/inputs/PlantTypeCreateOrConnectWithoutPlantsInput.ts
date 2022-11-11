import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeCreateWithoutPlantsInput } from "../inputs/PlantTypeCreateWithoutPlantsInput";
import { PlantTypeWhereUniqueInput } from "../inputs/PlantTypeWhereUniqueInput";

@TypeGraphQL.InputType("PlantTypeCreateOrConnectWithoutPlantsInput", {
  isAbstract: true
})
export class PlantTypeCreateOrConnectWithoutPlantsInput {
  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PlantTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantTypeCreateWithoutPlantsInput, {
    nullable: false
  })
  create!: PlantTypeCreateWithoutPlantsInput;
}
