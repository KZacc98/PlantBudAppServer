import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommunityUsersListRelationFilter } from "../inputs/CommunityUsersListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CommunityWhereInput", {
  isAbstract: true
})
export class CommunityWhereInput {
  @TypeGraphQL.Field(_type => [CommunityWhereInput], {
    nullable: true
  })
  AND?: CommunityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityWhereInput], {
    nullable: true
  })
  OR?: CommunityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityWhereInput], {
    nullable: true
  })
  NOT?: CommunityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  communityName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersListRelationFilter, {
    nullable: true
  })
  users?: CommunityUsersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
