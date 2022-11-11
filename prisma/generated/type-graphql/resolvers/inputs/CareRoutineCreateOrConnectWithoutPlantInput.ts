import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCreateWithoutPlantInput } from "../inputs/CareRoutineCreateWithoutPlantInput";
import { CareRoutineWhereUniqueInput } from "../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.InputType("CareRoutineCreateOrConnectWithoutPlantInput", {
  isAbstract: true
})
export class CareRoutineCreateOrConnectWithoutPlantInput {
  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: false
  })
  where!: CareRoutineWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareRoutineCreateWithoutPlantInput, {
    nullable: false
  })
  create!: CareRoutineCreateWithoutPlantInput;
}
