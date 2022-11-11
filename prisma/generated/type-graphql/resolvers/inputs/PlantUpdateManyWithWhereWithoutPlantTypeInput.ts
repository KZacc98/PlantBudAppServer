import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantScalarWhereInput } from "../inputs/PlantScalarWhereInput";
import { PlantUpdateManyMutationInput } from "../inputs/PlantUpdateManyMutationInput";

@TypeGraphQL.InputType("PlantUpdateManyWithWhereWithoutPlantTypeInput", {
  isAbstract: true
})
export class PlantUpdateManyWithWhereWithoutPlantTypeInput {
  @TypeGraphQL.Field(_type => PlantScalarWhereInput, {
    nullable: false
  })
  where!: PlantScalarWhereInput;

  @TypeGraphQL.Field(_type => PlantUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlantUpdateManyMutationInput;
}
