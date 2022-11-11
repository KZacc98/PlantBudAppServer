import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserBadgesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserBadgesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserBadgesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserBadgesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserBadgesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  badgeId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
