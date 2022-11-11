import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateWithoutPlantTypeInput } from "../inputs/PlantCreateWithoutPlantTypeInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateOrConnectWithoutPlantTypeInput", {
  isAbstract: true
})
export class PlantCreateOrConnectWithoutPlantTypeInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantCreateWithoutPlantTypeInput, {
    nullable: false
  })
  create!: PlantCreateWithoutPlantTypeInput;
}
