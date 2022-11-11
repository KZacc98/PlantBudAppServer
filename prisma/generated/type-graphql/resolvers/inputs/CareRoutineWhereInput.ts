import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumuserContentFlagFilter } from "../inputs/EnumuserContentFlagFilter";
import { PlantRelationFilter } from "../inputs/PlantRelationFilter";
import { RoutineStepListRelationFilter } from "../inputs/RoutineStepListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CareRoutineWhereInput", {
  isAbstract: true
})
export class CareRoutineWhereInput {
  @TypeGraphQL.Field(_type => [CareRoutineWhereInput], {
    nullable: true
  })
  AND?: CareRoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineWhereInput], {
    nullable: true
  })
  OR?: CareRoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineWhereInput], {
    nullable: true
  })
  NOT?: CareRoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  plantId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RoutineStepListRelationFilter, {
    nullable: true
  })
  routineSteps?: RoutineStepListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCompleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isShared?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumuserContentFlagFilter, {
    nullable: true
  })
  flag?: EnumuserContentFlagFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PlantRelationFilter, {
    nullable: true
  })
  plant?: PlantRelationFilter | undefined;
}
