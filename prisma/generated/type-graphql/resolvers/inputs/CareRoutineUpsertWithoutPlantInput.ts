import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateWithoutPlantInput } from "../inputs/CareRoutineCreateWithoutPlantInput";
import { CareRoutineUpdateWithoutPlantInput } from "../inputs/CareRoutineUpdateWithoutPlantInput";

@TypeGraphQL.InputType("CareRoutineUpsertWithoutPlantInput", {
  isAbstract: true
})
export class CareRoutineUpsertWithoutPlantInput {
  @TypeGraphQL.Field(_type => CareRoutineUpdateWithoutPlantInput, {
    nullable: false
  })
  update!: CareRoutineUpdateWithoutPlantInput;

  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutPlantInput, {
    nullable: false
  })
  create!: CareRoutineCreateWithoutPlantInput;
}
