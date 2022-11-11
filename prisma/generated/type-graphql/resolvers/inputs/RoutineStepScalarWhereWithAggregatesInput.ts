import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumcareRoutineStepFrequencyWithAggregatesFilter } from "../inputs/EnumcareRoutineStepFrequencyWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RoutineStepScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RoutineStepScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RoutineStepScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RoutineStepScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RoutineStepScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RoutineStepScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  careRoutineId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumcareRoutineStepFrequencyWithAggregatesFilter, {
    nullable: true
  })
  stepFrequency?: EnumcareRoutineStepFrequencyWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  otherFrequency?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isCompleted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  completedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
