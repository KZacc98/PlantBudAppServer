import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateOrConnectWithoutCareRoutineInput } from "../inputs/PlantCreateOrConnectWithoutCareRoutineInput";
import { PlantCreateWithoutCareRoutineInput } from "../inputs/PlantCreateWithoutCareRoutineInput";
import { PlantUpdateWithoutCareRoutineInput } from "../inputs/PlantUpdateWithoutCareRoutineInput";
import { PlantUpsertWithoutCareRoutineInput } from "../inputs/PlantUpsertWithoutCareRoutineInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpdateOneRequiredWithoutCareRoutineNestedInput", {
  isAbstract: true
})
export class PlantUpdateOneRequiredWithoutCareRoutineNestedInput {
  @TypeGraphQL.Field(_type => PlantCreateWithoutCareRoutineInput, {
    nullable: true
  })
  create?: PlantCreateWithoutCareRoutineInput | undefined;

  @TypeGraphQL.Field(_type => PlantCreateOrConnectWithoutCareRoutineInput, {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutCareRoutineInput | undefined;

  @TypeGraphQL.Field(_type => PlantUpsertWithoutCareRoutineInput, {
    nullable: true
  })
  upsert?: PlantUpsertWithoutCareRoutineInput | undefined;

  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: true
  })
  connect?: PlantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlantUpdateWithoutCareRoutineInput, {
    nullable: true
  })
  update?: PlantUpdateWithoutCareRoutineInput | undefined;
}
