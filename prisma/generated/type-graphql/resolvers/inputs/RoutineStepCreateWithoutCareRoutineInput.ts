import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.InputType("RoutineStepCreateWithoutCareRoutineInput", {
  isAbstract: true
})
export class RoutineStepCreateWithoutCareRoutineInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => careRoutineStepFrequency, {
    nullable: true
  })
  stepFrequency?: "threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otherFrequency?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCompleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
