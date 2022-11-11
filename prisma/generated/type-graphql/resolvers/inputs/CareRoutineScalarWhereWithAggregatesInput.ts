import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumuserContentFlagWithAggregatesFilter } from "../inputs/EnumuserContentFlagWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CareRoutineScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CareRoutineScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CareRoutineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CareRoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CareRoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CareRoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  plantId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isCompleted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isActive?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isShared?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumuserContentFlagWithAggregatesFilter, {
    nullable: true
  })
  flag?: EnumuserContentFlagWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
