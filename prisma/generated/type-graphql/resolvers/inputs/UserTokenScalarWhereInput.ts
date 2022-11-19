import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserTokenScalarWhereInput", {
  isAbstract: true
})
export class UserTokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserTokenScalarWhereInput], {
    nullable: true
  })
  AND?: UserTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarWhereInput], {
    nullable: true
  })
  OR?: UserTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarWhereInput], {
    nullable: true
  })
  NOT?: UserTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiresIn?: DateTimeFilter | undefined;
}
