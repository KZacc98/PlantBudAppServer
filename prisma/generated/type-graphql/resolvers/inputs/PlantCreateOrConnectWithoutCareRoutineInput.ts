import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateWithoutCareRoutineInput } from "../inputs/PlantCreateWithoutCareRoutineInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateOrConnectWithoutCareRoutineInput", {
  isAbstract: true
})
export class PlantCreateOrConnectWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantCreateWithoutCareRoutineInput, {
    nullable: false
  })
  create!: PlantCreateWithoutCareRoutineInput;
}
