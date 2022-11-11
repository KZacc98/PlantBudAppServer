import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeCreateNestedOneWithoutUsersInput } from "../inputs/BadgeCreateNestedOneWithoutUsersInput";
import { UserCreateNestedOneWithoutBadgesInput } from "../inputs/UserCreateNestedOneWithoutBadgesInput";

@TypeGraphQL.InputType("UserBadgesCreateInput", {
  isAbstract: true
})
export class UserBadgesCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBadgesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBadgesInput;

  @TypeGraphQL.Field(_type => BadgeCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  badge!: BadgeCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
