import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityRelationFilter } from "../inputs/CommunityRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CommunityUsersWhereInput", {
  isAbstract: true
})
export class CommunityUsersWhereInput {
  @TypeGraphQL.Field(_type => [CommunityUsersWhereInput], {
    nullable: true
  })
  AND?: CommunityUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereInput], {
    nullable: true
  })
  OR?: CommunityUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereInput], {
    nullable: true
  })
  NOT?: CommunityUsersWhereInput[] | undefined;

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
  communityId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CommunityRelationFilter, {
    nullable: true
  })
  community?: CommunityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
