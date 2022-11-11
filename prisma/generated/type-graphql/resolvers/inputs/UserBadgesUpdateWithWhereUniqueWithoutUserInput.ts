import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesUpdateWithoutUserInput } from "../inputs/UserBadgesUpdateWithoutUserInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: false
  })
  where!: UserBadgesWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserBadgesUpdateWithoutUserInput;
}
