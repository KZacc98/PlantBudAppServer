import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateOrConnectWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateOrConnectWithoutRoutineStepsInput";
import { CareRoutineCreateWithoutRoutineStepsInput } from "../inputs/CareRoutineCreateWithoutRoutineStepsInput";
import { CareRoutineUpdateWithoutRoutineStepsInput } from "../inputs/CareRoutineUpdateWithoutRoutineStepsInput";
import { CareRoutineUpsertWithoutRoutineStepsInput } from "../inputs/CareRoutineUpsertWithoutRoutineStepsInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineUpdateOneRequiredWithoutRoutineStepsNestedInput", {
  isAbstract: true
})
export class CareRoutineUpdateOneRequiredWithoutRoutineStepsNestedInput {
  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutRoutineStepsInput, {
    nullable: true
  })
  create?: CareRoutineCreateWithoutRoutineStepsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineCreateOrConnectWithoutRoutineStepsInput, {
    nullable: true
  })
  connectOrCreate?: CareRoutineCreateOrConnectWithoutRoutineStepsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineUpsertWithoutRoutineStepsInput, {
    nullable: true
  })
  upsert?: CareRoutineUpsertWithoutRoutineStepsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: true
  })
  connect?: CareRoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineUpdateWithoutRoutineStepsInput, {
    nullable: true
  })
  update?: CareRoutineUpdateWithoutRoutineStepsInput | undefined;
}
