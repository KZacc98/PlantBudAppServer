import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCreateWithoutUserInput } from "../inputs/UserTokenCreateWithoutUserInput";
import { UserTokenUpdateWithoutUserInput } from "../inputs/UserTokenUpdateWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.InputType("UserTokenUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserTokenUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserTokenUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserTokenUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserTokenCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserTokenCreateWithoutUserInput;
}
