import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserCreateWithoutTokenInput } from "../inputs/UserCreateWithoutTokenInput";
import { UserUpdateWithoutTokenInput } from "../inputs/UserUpdateWithoutTokenInput";
import { UserUpsertWithoutTokenInput } from "../inputs/UserUpsertWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTokenNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTokenNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTokenInput, {
    nullable: true
  })
  create?: UserCreateWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTokenInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTokenInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTokenInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTokenInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTokenInput | undefined;
}
