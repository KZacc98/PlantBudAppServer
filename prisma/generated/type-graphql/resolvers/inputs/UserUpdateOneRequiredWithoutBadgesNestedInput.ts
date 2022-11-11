import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBadgesInput } from "../inputs/UserCreateOrConnectWithoutBadgesInput";
import { UserCreateWithoutBadgesInput } from "../inputs/UserCreateWithoutBadgesInput";
import { UserUpdateWithoutBadgesInput } from "../inputs/UserUpdateWithoutBadgesInput";
import { UserUpsertWithoutBadgesInput } from "../inputs/UserUpsertWithoutBadgesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBadgesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBadgesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBadgesInput, {
    nullable: true
  })
  create?: UserCreateWithoutBadgesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBadgesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBadgesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBadgesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBadgesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBadgesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBadgesInput | undefined;
}
