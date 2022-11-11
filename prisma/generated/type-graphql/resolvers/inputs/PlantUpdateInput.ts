import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineUpdateOneWithoutPlantNestedInput } from "../inputs/CareRoutineUpdateOneWithoutPlantNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumplantPlacementFieldUpdateOperationsInput } from "../inputs/EnumplantPlacementFieldUpdateOperationsInput";
import { EnumplantStateFieldUpdateOperationsInput } from "../inputs/EnumplantStateFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PlantTypeUpdateOneRequiredWithoutPlantsNestedInput } from "../inputs/PlantTypeUpdateOneRequiredWithoutPlantsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPlantsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPlantsNestedInput";

@TypeGraphQL.InputType("PlantUpdateInput", {
  isAbstract: true
})
export class PlantUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  plantName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  plantImage?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineUpdateOneWithoutPlantNestedInput, {
    nullable: true
  })
  careRoutine?: CareRoutineUpdateOneWithoutPlantNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumplantStateFieldUpdateOperationsInput, {
    nullable: true
  })
  plantState?: EnumplantStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumplantPlacementFieldUpdateOperationsInput, {
    nullable: true
  })
  plantPlacement?: EnumplantPlacementFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPlantsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPlantsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeUpdateOneRequiredWithoutPlantsNestedInput, {
    nullable: true
  })
  plantType?: PlantTypeUpdateOneRequiredWithoutPlantsNestedInput | undefined;
}
