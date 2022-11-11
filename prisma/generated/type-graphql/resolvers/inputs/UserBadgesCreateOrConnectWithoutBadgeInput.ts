import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateWithoutBadgeInput } from "../inputs/UserBadgesCreateWithoutBadgeInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesCreateOrConnectWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesCreateOrConnectWithoutBadgeInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesCreateWithoutBadgeInput, {
    nullable: false
  })
  create!: UserBadgesCreateWithoutBadgeInput;
}
