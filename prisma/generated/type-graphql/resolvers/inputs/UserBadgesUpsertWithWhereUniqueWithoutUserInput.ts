import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateWithoutUserInput } from "../inputs/UserBadgesCreateWithoutUserInput";
import { UserBadgesUpdateWithoutUserInput } from "../inputs/UserBadgesUpdateWithoutUserInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserBadgesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserBadgesCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserBadgesCreateWithoutUserInput;
}
