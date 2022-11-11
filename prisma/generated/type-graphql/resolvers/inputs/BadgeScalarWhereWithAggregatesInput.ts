import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BadgeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BadgeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BadgeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BadgeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BadgeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BadgeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BadgeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BadgeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  badgeName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  points?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
