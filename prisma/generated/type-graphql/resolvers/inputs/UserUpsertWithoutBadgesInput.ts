import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBadgesInput } from "../inputs/UserCreateWithoutBadgesInput";
import { UserUpdateWithoutBadgesInput } from "../inputs/UserUpdateWithoutBadgesInput";

@TypeGraphQL.InputType("UserUpsertWithoutBadgesInput", {
  isAbstract: true
})
export class UserUpsertWithoutBadgesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBadgesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBadgesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBadgesInput, {
    nullable: false
  })
  create!: UserCreateWithoutBadgesInput;
}
