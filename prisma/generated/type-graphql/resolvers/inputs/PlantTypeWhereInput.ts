import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PlantListRelationFilter } from "../inputs/PlantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PlantTypeWhereInput", {
  isAbstract: true
})
export class PlantTypeWhereInput {
  @TypeGraphQL.Field(_type => [PlantTypeWhereInput], {
    nullable: true
  })
  AND?: PlantTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeWhereInput], {
    nullable: true
  })
  OR?: PlantTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeWhereInput], {
    nullable: true
  })
  NOT?: PlantTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  species?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PlantListRelationFilter, {
    nullable: true
  })
  plants?: PlantListRelationFilter | undefined;
}
