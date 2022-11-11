import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCreateWithoutCareRoutineInput } from "../inputs/RoutineStepCreateWithoutCareRoutineInput";
import { RoutineStepUpdateWithoutCareRoutineInput } from "../inputs/RoutineStepUpdateWithoutCareRoutineInput";
import { RoutineStepWhereUniqueInput } from "../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.InputType("RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoutineStepUpdateWithoutCareRoutineInput, {
    nullable: false
  })
  update!: RoutineStepUpdateWithoutCareRoutineInput;

  @TypeGraphQL.Field(_type => RoutineStepCreateWithoutCareRoutineInput, {
    nullable: false
  })
  create!: RoutineStepCreateWithoutCareRoutineInput;
}
