import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeRelationFilter } from "../inputs/BadgeRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserBadgesWhereInput", {
  isAbstract: true
})
export class UserBadgesWhereInput {
  @TypeGraphQL.Field(_type => [UserBadgesWhereInput], {
    nullable: true
  })
  AND?: UserBadgesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereInput], {
    nullable: true
  })
  OR?: UserBadgesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereInput], {
    nullable: true
  })
  NOT?: UserBadgesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  badgeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BadgeRelationFilter, {
    nullable: true
  })
  badge?: BadgeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
