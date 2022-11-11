import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateNestedOneWithoutCareRoutineInput } from "../inputs/PlantCreateNestedOneWithoutCareRoutineInput";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("CareRoutineCreateWithoutRoutineStepsInput", {
  isAbstract: true
})
export class CareRoutineCreateWithoutRoutineStepsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCompleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isShared?: boolean | undefined;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  flag?: "offfensive" | "useful" | "best" | "default" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PlantCreateNestedOneWithoutCareRoutineInput, {
    nullable: false
  })
  plant!: PlantCreateNestedOneWithoutCareRoutineInput;
}
