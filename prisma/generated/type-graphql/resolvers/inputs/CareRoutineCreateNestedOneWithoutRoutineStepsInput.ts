import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateOrConnectWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateOrConnectWithoutRoutineStepsInput";
import { CareRoutineCreateWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateWithoutRoutineStepsInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineCreateNestedOneWithoutRoutineStepsInput", {
  isAbstract: true
})
export class CareRoutineCreateNestedOneWithoutRoutineStepsInput {
  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutRoutineStepsInput, {
    nullable: true
  })
  create?: CareRoutineCreateWithoutRoutineStepsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineCreateOrConnectWithoutRoutineStepsInput, {
    nullable: true
  })
  connectOrCreate?: CareRoutineCreateOrConnectWithoutRoutineStepsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: true
  })
  connect?: CareRoutineWhereUniqueInput | undefined;
}
