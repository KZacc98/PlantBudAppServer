import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBadgesInput } from "../inputs/UserCreateWithoutBadgesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBadgesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBadgesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBadgesInput, {
    nullable: false
  })
  create!: UserCreateWithoutBadgesInput;
}
