import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumplantPlacementFilter } from "../inputs/EnumplantPlacementFilter";
import { EnumplantStateFilter } from "../inputs/EnumplantStateFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PlantScalarWhereInput", {
  isAbstract: true
})
export class PlantScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlantScalarWhereInput], {
    nullable: true
  })
  AND?: PlantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereInput], {
    nullable: true
  })
  OR?: PlantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereInput], {
    nullable: true
  })
  NOT?: PlantScalarWhereInput[] | undefined;

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
}
