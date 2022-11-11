import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBadgesInput } from "../inputs/UserCreateNestedOneWithoutBadgesInput";

@TypeGraphQL.InputType("UserBadgesCreateWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesCreateWithoutBadgeInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBadgesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBadgesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
