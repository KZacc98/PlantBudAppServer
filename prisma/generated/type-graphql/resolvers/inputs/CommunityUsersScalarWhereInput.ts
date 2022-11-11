import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CommunityUsersScalarWhereInput", {
  isAbstract: true
})
export class CommunityUsersScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereInput], {
    nullable: true
  })
  AND?: CommunityUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereInput], {
    nullable: true
  })
  OR?: CommunityUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereInput], {
    nullable: true
  })
  NOT?: CommunityUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  communityId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
