import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumuserContentFlagFieldUpdateOperationsInput } from "../inputs/EnumuserContentFlagFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PlantUpdateOneRequiredWithoutCareRoutineNestedInput } from "../inputs/PlantUpdateOneRequiredWithoutCareRoutineNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CareRoutineUpdateWithoutRoutineStepsInput", {
  isAbstract: true
})
export class CareRoutineUpdateWithoutRoutineStepsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isCompleted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isActive?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isShared?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumuserContentFlagFieldUpdateOperationsInput, {
    nullable: true
  })
  flag?: EnumuserContentFlagFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlantUpdateOneRequiredWithoutCareRoutineNestedInput, {
    nullable: true
  })
  plant?: PlantUpdateOneRequiredWithoutCareRoutineNestedInput | undefined;
}
