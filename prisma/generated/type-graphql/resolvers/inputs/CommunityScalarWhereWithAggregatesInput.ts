import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommunityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CommunityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommunityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommunityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommunityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommunityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  communityName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isActive?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
