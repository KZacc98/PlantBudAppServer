import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesUpdateWithoutBadgeInput } from "../inputs/UserBadgesUpdateWithoutBadgeInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpdateWithWhereUniqueWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesUpdateWithWhereUniqueWithoutBadgeInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateWithoutBadgeInput, {
    nullable: false
  })
  data!: UserBadgesUpdateWithoutBadgeInput;
}
