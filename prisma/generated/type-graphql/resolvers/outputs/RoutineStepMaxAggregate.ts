import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.ObjectType("RoutineStepMaxAggregate", {
  isAbstract: true
})
export class RoutineStepMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  careRoutineId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => careRoutineStepFrequency, {
    nullable: true
  })
  stepFrequency!: "threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otherFrequency!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCompleted!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
