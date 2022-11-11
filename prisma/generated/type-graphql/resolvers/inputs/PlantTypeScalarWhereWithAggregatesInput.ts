import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlantTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlantTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlantTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlantTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlantTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlantTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  species?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  type?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
