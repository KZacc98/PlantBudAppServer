import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommunityUsersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CommunityUsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommunityUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommunityUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommunityUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  communityId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
