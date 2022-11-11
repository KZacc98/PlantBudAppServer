import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesUserIdBadgeIdCompoundUniqueInput } from "../inputs/UserBadgesUserIdBadgeIdCompoundUniqueInput";

@TypeGraphQL.InputType("UserBadgesWhereUniqueInput", {
  isAbstract: true
})
export class UserBadgesWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserBadgesUserIdBadgeIdCompoundUniqueInput, {
    nullable: true
  })
  userId_badgeId?: UserBadgesUserIdBadgeIdCompoundUniqueInput | undefined;
}
