import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateWithoutRoutineStepsInput";
import { CareRoutineUpdateWithoutRoutineStepsInput } from "../inputs/CareRoutineUpdateWithoutRoutineStepsInput";

@TypeGraphQL.InputType("CareRoutineUpsertWithoutRoutineStepsInput", {
  isAbstract: true
})
export class CareRoutineUpsertWithoutRoutineStepsInput {
  @TypeGraphQL.Field(_type => CareRoutineUpdateWithoutRoutineStepsInput, {
    nullable: false
  })
  update!: CareRoutineUpdateWithoutRoutineStepsInput;

  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutRoutineStepsInput, {
    nullable: false
  })
  create!: CareRoutineCreateWithoutRoutineStepsInput;
}
