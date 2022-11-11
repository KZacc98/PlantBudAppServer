import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserBadgesListRelationFilter } from "../inputs/UserBadgesListRelationFilter";

@TypeGraphQL.InputType("BadgeWhereInput", {
  isAbstract: true
})
export class BadgeWhereInput {
  @TypeGraphQL.Field(_type => [BadgeWhereInput], {
    nullable: true
  })
  AND?: BadgeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BadgeWhereInput], {
    nullable: true
  })
  OR?: BadgeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BadgeWhereInput], {
    nullable: true
  })
  NOT?: BadgeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  badgeName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  points?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserBadgesListRelationFilter, {
    nullable: true
  })
  users?: UserBadgesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
