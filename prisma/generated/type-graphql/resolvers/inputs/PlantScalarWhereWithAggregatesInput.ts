import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumplantPlacementWithAggregatesFilter } from "../inputs/EnumplantPlacementWithAggregatesFilter";
import { EnumplantStateWithAggregatesFilter } from "../inputs/EnumplantStateWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlantScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlantScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  plantName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  plantTypeId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  plantImage?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumplantStateWithAggregatesFilter, {
    nullable: true
  })
  plantState?: EnumplantStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumplantPlacementWithAggregatesFilter, {
    nullable: true
  })
  plantPlacement?: EnumplantPlacementWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
