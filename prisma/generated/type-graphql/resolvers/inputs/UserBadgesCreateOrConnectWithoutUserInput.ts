import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateWithoutUserInput } from "../inputs/UserBadgesCreateWithoutUserInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserBadgesCreateWithoutUserInput;
}
