import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCreateManyCareRoutineInputEnvelope } from "../inputs/RoutineStepCreateManyCareRoutineInputEnvelope";
import { RoutineStepCreateOrConnectWithoutCareRoutineInput } from "../inputs/RoutineStepCreateOrConnectWithoutCareRoutineInput";
import { RoutineStepCreateWithoutCareRoutineInput } from "../inputs/RoutineStepCreateWithoutCareRoutineInput";
import { RoutineStepWhereUniqueInput } from "../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.InputType("RoutineStepCreateNestedManyWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepCreateNestedManyWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => [RoutineStepCreateWithoutCareRoutineInput], {
    nullable: true
  })
  create?: RoutineStepCreateWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepCreateOrConnectWithoutCareRoutineInput], {
    nullable: true
  })
  connectOrCreate?: RoutineStepCreateOrConnectWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => RoutineStepCreateManyCareRoutineInputEnvelope, {
    nullable: true
  })
  createMany?: RoutineStepCreateManyCareRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereUniqueInput], {
    nullable: true
  })
  connect?: RoutineStepWhereUniqueInput[] | undefined;
}
