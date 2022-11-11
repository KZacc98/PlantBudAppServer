import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantUpdateWithoutPlantTypeInput } from "../inputs/PlantUpdateWithoutPlantTypeInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpdateWithWhereUniqueWithoutPlantTypeInput", {
  isAbstract: true
})
export class PlantUpdateWithWhereUniqueWithoutPlantTypeInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantUpdateWithoutPlantTypeInput, {
    nullable: false
  })
  data!: PlantUpdateWithoutPlantTypeInput;
}
