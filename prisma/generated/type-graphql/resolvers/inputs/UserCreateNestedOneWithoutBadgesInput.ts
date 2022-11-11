import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBadgesInput } from "../inputs/UserCreateOrConnectWithoutBadgesInput";
import { UserCreateWithoutBadgesInput } from "../inputs/UserCreateWithoutBadgesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBadgesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBadgesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBadgesInput, {
    nullable: true
  })
  create?: UserCreateWithoutBadgesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBadgesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBadgesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
