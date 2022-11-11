import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateWithoutCareRoutineInput } from "../inputs/PlantCreateWithoutCareRoutineInput";
import { PlantUpdateWithoutCareRoutineInput } from "../inputs/PlantUpdateWithoutCareRoutineInput";

@TypeGraphQL.InputType("PlantUpsertWithoutCareRoutineInput", {
  isAbstract: true
})
export class PlantUpsertWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => PlantUpdateWithoutCareRoutineInput, {
    nullable: false
  })
  update!: PlantUpdateWithoutCareRoutineInput;

  @TypeGraphQL.Field(_type => PlantCreateWithoutCareRoutineInput, {
    nullable: false
  })
  create!: PlantCreateWithoutCareRoutineInput;
}
