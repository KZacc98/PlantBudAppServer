import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepUpdateWithoutCareRoutineInput } from "../inputs/RoutineStepUpdateWithoutCareRoutineInput";
import { RoutineStepWhereUniqueInput } from "../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.InputType("RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoutineStepUpdateWithoutCareRoutineInput, {
    nullable: false
  })
  data!: RoutineStepUpdateWithoutCareRoutineInput;
}
