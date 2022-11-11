import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateWithoutBadgeInput } from "../inputs/UserBadgesCreateWithoutBadgeInput";
import { UserBadgesUpdateWithoutBadgeInput } from "../inputs/UserBadgesUpdateWithoutBadgeInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpsertWithWhereUniqueWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesUpsertWithWhereUniqueWithoutBadgeInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateWithoutBadgeInput, {
    nullable: false
  })
  update!: UserBadgesUpdateWithoutBadgeInput;

  @TypeGraphQL.Field(_type => UserBadgesCreateWithoutBadgeInput, {
    nullable: false
  })
  create!: UserBadgesCreateWithoutBadgeInput;
}
