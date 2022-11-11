import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCountAggregate } from "../outputs/RoutineStepCountAggregate";
import { RoutineStepMaxAggregate } from "../outputs/RoutineStepMaxAggregate";
import { RoutineStepMinAggregate } from "../outputs/RoutineStepMinAggregate";
import { careRoutineStepFrequency } from "../../enums/careRoutineStepFrequency";

@TypeGraphQL.ObjectType("RoutineStepGroupBy", {
  isAbstract: true
})
export class RoutineStepGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  careRoutineId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => careRoutineStepFrequency, {
    nullable: false
  })
  stepFrequency!: "threeTimesADay" | "twoTimesADay" | "daily" | "everyTwoDays" | "everyThreeDays" | "everyFourDays" | "everyFiveDays" | "everySixDays" | "weekly" | "everyTwoWeeks" | "everyThreeWeeks" | "onceAMonth" | "onceAYear" | "other" | "default";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otherFrequency!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCompleted!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => RoutineStepCountAggregate, {
    nullable: true
  })
  _count!: RoutineStepCountAggregate | null;

  @TypeGraphQL.Field(_type => RoutineStepMinAggregate, {
    nullable: true
  })
  _min!: RoutineStepMinAggregate | null;

  @TypeGraphQL.Field(_type => RoutineStepMaxAggregate, {
    nullable: true
  })
  _max!: RoutineStepMaxAggregate | null;
}
