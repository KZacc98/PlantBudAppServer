import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPlantsInput } from "../inputs/UserCreateOrConnectWithoutPlantsInput";
import { UserCreateWithoutPlantsInput } from "../inputs/UserCreateWithoutPlantsInput";
import { UserUpdateWithoutPlantsInput } from "../inputs/UserUpdateWithoutPlantsInput";
import { UserUpsertWithoutPlantsInput } from "../inputs/UserUpsertWithoutPlantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPlantsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPlantsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPlantsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPlantsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPlantsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPlantsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPlantsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPlantsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPlantsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPlantsInput | undefined;
}
