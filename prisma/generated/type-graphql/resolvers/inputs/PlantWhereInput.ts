import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineRelationFilter } from "../inputs/CareRoutineRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumplantPlacementFilter } from "../inputs/EnumplantPlacementFilter";
import { EnumplantStateFilter } from "../inputs/EnumplantStateFilter";
import { PlantTypeRelationFilter } from "../inputs/PlantTypeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PlantWhereInput", {
  isAbstract: true
})
export class PlantWhereInput {
  @TypeGraphQL.Field(_type => [PlantWhereInput], {
    nullable: true
  })
  AND?: PlantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereInput], {
    nullable: true
  })
  OR?: PlantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereInput], {
    nullable: true
  })
  NOT?: PlantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  plantName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  plantTypeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  plantImage?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CareRoutineRelationFilter, {
    nullable: true
  })
  careRoutine?: CareRoutineRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumplantStateFilter, {
    nullable: true
  })
  plantState?: EnumplantStateFilter | undefined;

  @TypeGraphQL.Field(_type => EnumplantPlacementFilter, {
    nullable: true
  })
  plantPlacement?: EnumplantPlacementFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlantTypeRelationFilter, {
    nullable: true
  })
  plantType?: PlantTypeRelationFilter | undefined;
}
