import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateWithoutRoutineStepsInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineCreateOrConnectWithoutRoutineStepsInput", {
  isAbstract: true
})
export class CareRoutineCreateOrConnectWithoutRoutineStepsInput {
  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: false
  })
  where!: CareRoutineWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutRoutineStepsInput, {
    nullable: false
  })
  create!: CareRoutineCreateWithoutRoutineStepsInput;
}
