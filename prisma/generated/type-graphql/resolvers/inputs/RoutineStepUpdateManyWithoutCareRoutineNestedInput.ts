import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCreateManyCareRoutineInputEnvelope } from "../inputs/RoutineStepCreateManyCareRoutineInputEnvelope";
import { RoutineStepCreateOrConnectWithoutCareRoutineInput } from "../inputs/RoutineStepCreateOrConnectWithoutCareRoutineInput";
import { RoutineStepCreateWithoutCareRoutineInput } from "../inputs/RoutineStepCreateWithoutCareRoutineInput";
import { RoutineStepScalarWhereInput } from "../inputs/RoutineStepScalarWhereInput";
import { RoutineStepUpdateManyWithWhereWithoutCareRoutineInput } from "../inputs/RoutineStepUpdateManyWithWhereWithoutCareRoutineInput";
import { RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput } from "../inputs/RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput";
import { RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput } from "../inputs/RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput";
import { RoutineStepWhereUniqueInput } from "../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.InputType("RoutineStepUpdateManyWithoutCareRoutineNestedInput", {
  isAbstract: true
})
export class RoutineStepUpdateManyWithoutCareRoutineNestedInput {
  @TypeGraphQL.Field(_type => [RoutineStepCreateWithoutCareRoutineInput], {
    nullable: true
  })
  create?: RoutineStepCreateWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepCreateOrConnectWithoutCareRoutineInput], {
    nullable: true
  })
  connectOrCreate?: RoutineStepCreateOrConnectWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput], {
    nullable: true
  })
  upsert?: RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => RoutineStepCreateManyCareRoutineInputEnvelope, {
    nullable: true
  })
  createMany?: RoutineStepCreateManyCareRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereUniqueInput], {
    nullable: true
  })
  set?: RoutineStepWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RoutineStepWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereUniqueInput], {
    nullable: true
  })
  delete?: RoutineStepWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereUniqueInput], {
    nullable: true
  })
  connect?: RoutineStepWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput], {
    nullable: true
  })
  update?: RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepUpdateManyWithWhereWithoutCareRoutineInput], {
    nullable: true
  })
  updateMany?: RoutineStepUpdateManyWithWhereWithoutCareRoutineInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RoutineStepScalarWhereInput[] | undefined;
}
