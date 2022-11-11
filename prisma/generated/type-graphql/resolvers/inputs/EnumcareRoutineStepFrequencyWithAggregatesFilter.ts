import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumcareRoutineStepFrequencyFilter } from "../inputs/NestedEnumcareRoutineStepFrequencyFilter";
import { NestedEnumcareRoutineStepFrequencyWithAggregatesFilter } from "../inputs/NestedEnumcareRoutineStepFrequencyWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.InputType("EnumcareRoutineStepFrequencyWithAggregatesFilter", {
  isAbstract: true
})
export class EnumcareRoutineStepFrequencyWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumcareRoutineStepFrequencyWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumcareRoutineStepFrequencyWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcareRoutineStepFrequencyFilter, {
    nullable: true
  })
  _min?: NestedEnumcareRoutineStepFrequencyFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcareRoutineStepFrequencyFilter, {
    nullable: true
  })
  _max?: NestedEnumcareRoutineStepFrequencyFilter | undefined;
}
