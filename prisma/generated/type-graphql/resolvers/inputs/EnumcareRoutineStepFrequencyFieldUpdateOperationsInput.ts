import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.InputType("EnumcareRoutineStepFrequencyFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumcareRoutineStepFrequencyFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => careRoutineStepFrequency, {
    nullable: true
  })
  set?: "threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default" | undefined;
}
