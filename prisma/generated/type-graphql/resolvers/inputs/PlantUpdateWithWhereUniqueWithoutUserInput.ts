import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantUpdateWithoutUserInput } from "../inputs/PlantUpdateWithoutUserInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlantUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PlantUpdateWithoutUserInput;
}
