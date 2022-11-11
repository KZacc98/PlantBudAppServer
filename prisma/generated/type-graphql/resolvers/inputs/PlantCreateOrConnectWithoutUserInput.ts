import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateWithoutUserInput } from "../inputs/PlantCreateWithoutUserInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PlantCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlantCreateWithoutUserInput;
}
