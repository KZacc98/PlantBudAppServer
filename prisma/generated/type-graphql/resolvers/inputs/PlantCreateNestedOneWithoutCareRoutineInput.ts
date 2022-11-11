import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateOrConnectWithoutCareRoutineInput } from "../inputs/PlantCreateOrConnectWithoutCareRoutineInput";
import { PlantCreateWithoutCareRoutineInput } from "../inputs/PlantCreateWithoutCareRoutineInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateNestedOneWithoutCareRoutineInput", {
  isAbstract: true
})
export class PlantCreateNestedOneWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => PlantCreateWithoutCareRoutineInput, {
    nullable: true
  })
  create?: PlantCreateWithoutCareRoutineInput | undefined;

  @TypeGraphQL.Field(_type => PlantCreateOrConnectWithoutCareRoutineInput, {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutCareRoutineInput | undefined;

  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: true
  })
  connect?: PlantWhereUniqueInput | undefined;
}
