import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepScalarWhereInput } from "../inputs/RoutineStepScalarWhereInput";
import { RoutineStepUpdateManyMutationInput } from "../inputs/RoutineStepUpdateManyMutationInput";

@TypeGraphQL.InputType("RoutineStepUpdateManyWithWhereWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepUpdateManyWithWhereWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => RoutineStepScalarWhereInput, {
    nullable: false
  })
  where!: RoutineStepScalarWhereInput;

  @TypeGraphQL.Field(_type => RoutineStepUpdateManyMutationInput, {
    nullable: false
  })
  data!: RoutineStepUpdateManyMutationInput;
}
