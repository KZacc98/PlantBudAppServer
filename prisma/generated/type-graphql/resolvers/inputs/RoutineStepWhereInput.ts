import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CareRoutineRelationFilter } from "../inputs/CareRoutineRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumcareRoutineStepFrequencyFilter } from "../inputs/EnumcareRoutineStepFrequencyFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RoutineStepWhereInput", {
  isAbstract: true
})
export class RoutineStepWhereInput {
  @TypeGraphQL.Field(_type => [RoutineStepWhereInput], {
    nullable: true
  })
  AND?: RoutineStepWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereInput], {
    nullable: true
  })
  OR?: RoutineStepWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepWhereInput], {
    nullable: true
  })
  NOT?: RoutineStepWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  careRoutineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumcareRoutineStepFrequencyFilter, {
    nullable: true
  })
  stepFrequency?: EnumcareRoutineStepFrequencyFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  otherFrequency?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCompleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CareRoutineRelationFilter, {
    nullable: true
  })
  careRoutine?: CareRoutineRelationFilter | undefined;
}
