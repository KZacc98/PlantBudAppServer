import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateOrConnectWithoutPlantInput } from "../inputs/CareRoutineCreateOrConnectWithoutPlantInput";
import { CareRoutineCreateWithoutPlantInput } from "../inputs/CareRoutineCreateWithoutPlantInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineCreateNestedOneWithoutPlantInput", {
  isAbstract: true
})
export class CareRoutineCreateNestedOneWithoutPlantInput {
  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutPlantInput, {
    nullable: true
  })
  create?: CareRoutineCreateWithoutPlantInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineCreateOrConnectWithoutPlantInput, {
    nullable: true
  })
  connectOrCreate?: CareRoutineCreateOrConnectWithoutPlantInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: true
  })
  connect?: CareRoutineWhereUniqueInput | undefined;
}
