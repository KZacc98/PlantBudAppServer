import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserTokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expiresIn?: DateTimeWithAggregatesFilter | undefined;
}
