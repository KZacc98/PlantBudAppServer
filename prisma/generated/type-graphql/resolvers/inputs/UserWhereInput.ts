import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { CommunityUsersListRelationFilter } from "../inputs/CommunityUsersListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumgenderFilter } from "../inputs/EnumgenderFilter";
import { EnumuserTypeFilter } from "../inputs/EnumuserTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlantListRelationFilter } from "../inputs/PlantListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserBadgesListRelationFilter } from "../inputs/UserBadgesListRelationFilter";
import { UserTokenListRelationFilter } from "../inputs/UserTokenListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phoneNumber?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFilter, {
    nullable: true
  })
  gender?: EnumgenderFilter | undefined;

  @TypeGraphQL.Field(_type => PlantListRelationFilter, {
    nullable: true
  })
  plants?: PlantListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserBadgesListRelationFilter, {
    nullable: true
  })
  badges?: UserBadgesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersListRelationFilter, {
    nullable: true
  })
  communities?: CommunityUsersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserTokenListRelationFilter, {
    nullable: true
  })
  token?: UserTokenListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  points?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumuserTypeFilter, {
    nullable: true
  })
  userType?: EnumuserTypeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
