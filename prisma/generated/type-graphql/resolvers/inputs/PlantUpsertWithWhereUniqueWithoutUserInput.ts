import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateWithoutUserInput } from "../inputs/PlantCreateWithoutUserInput";
import { PlantUpdateWithoutUserInput } from "../inputs/PlantUpdateWithoutUserInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlantUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PlantUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PlantCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlantCreateWithoutUserInput;
}
