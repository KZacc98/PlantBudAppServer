import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCreateWithoutCareRoutineInput } from "../inputs/RoutineStepCreateWithoutCareRoutineInput";
import { RoutineStepWhereUniqueInput } from "../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.InputType("RoutineStepCreateOrConnectWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepCreateOrConnectWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoutineStepCreateWithoutCareRoutineInput, {
    nullable: false
  })
  create!: RoutineStepCreateWithoutCareRoutineInput;
}
