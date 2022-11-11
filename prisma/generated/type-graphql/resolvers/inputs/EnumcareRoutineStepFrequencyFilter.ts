import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumcareRoutineStepFrequencyFilter } from "../inputs/NestedEnumcareRoutineStepFrequencyFilter";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.InputType("EnumcareRoutineStepFrequencyFilter", {
  isAbstract: true
})
export class EnumcareRoutineStepFrequencyFilter {
  @TypeGraphQL.Field(_type => careRoutineStepFrequency, {
    nullable: true
  })
  equals?: "threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default" | undefined;

  @TypeGraphQL.Field(_type => [careRoutineStepFrequency], {
    nullable: true
  })
  in?: Array<"threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default"> | undefined;

  @TypeGraphQL.Field(_type => [careRoutineStepFrequency], {
    nullable: true
  })
  notIn?: Array<"threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcareRoutineStepFrequencyFilter, {
    nullable: true
  })
  not?: NestedEnumcareRoutineStepFrequencyFilter | undefined;
}
