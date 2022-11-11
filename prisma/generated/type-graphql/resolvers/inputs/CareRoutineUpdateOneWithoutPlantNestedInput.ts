import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateOrConnectWithoutPlantInput } from "../inputs/CareRoutineCreateOrConnectWithoutPlantInput";
import { CareRoutineCreateWithoutPlantInput } from "../inputs/CareRoutineCreateWithoutPlantInput";
import { CareRoutineUpdateWithoutPlantInput } from "../inputs/CareRoutineUpdateWithoutPlantInput";
import { CareRoutineUpsertWithoutPlantInput } from "../inputs/CareRoutineUpsertWithoutPlantInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineUpdateOneWithoutPlantNestedInput", {
  isAbstract: true
})
export class CareRoutineUpdateOneWithoutPlantNestedInput {
  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutPlantInput, {
    nullable: true
  })
  create?: CareRoutineCreateWithoutPlantInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineCreateOrConnectWithoutPlantInput, {
    nullable: true
  })
  connectOrCreate?: CareRoutineCreateOrConnectWithoutPlantInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineUpsertWithoutPlantInput, {
    nullable: true
  })
  upsert?: CareRoutineUpsertWithoutPlantInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: true
  })
  connect?: CareRoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineUpdateWithoutPlantInput, {
    nullable: true
  })
  update?: CareRoutineUpdateWithoutPlantInput | undefined;
}
