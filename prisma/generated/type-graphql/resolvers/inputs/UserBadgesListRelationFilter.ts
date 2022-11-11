import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesWhereInput } from "../inputs/UserBadgesWhereInput";

@TypeGraphQL.InputType("UserBadgesListRelationFilter", {
  isAbstract: true
})
export class UserBadgesListRelationFilter {
  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  every?: UserBadgesWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  some?: UserBadgesWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  none?: UserBadgesWhereInput | undefined;
}
