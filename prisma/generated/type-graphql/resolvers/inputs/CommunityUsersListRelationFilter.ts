import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersWhereInput } from "../inputs/CommunityUsersWhereInput";

@TypeGraphQL.InputType("CommunityUsersListRelationFilter", {
  isAbstract: true
})
export class CommunityUsersListRelationFilter {
  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  every?: CommunityUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  some?: CommunityUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  none?: CommunityUsersWhereInput | undefined;
}
