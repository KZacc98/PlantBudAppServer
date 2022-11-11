import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserBadgesScalarWhereInput", {
  isAbstract: true
})
export class UserBadgesScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereInput], {
    nullable: true
  })
  AND?: UserBadgesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereInput], {
    nullable: true
  })
  OR?: UserBadgesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereInput], {
    nullable: true
  })
  NOT?: UserBadgesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  badgeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
