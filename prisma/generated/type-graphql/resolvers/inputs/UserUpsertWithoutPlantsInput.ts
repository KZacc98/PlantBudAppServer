import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlantsInput } from "../inputs/UserCreateWithoutPlantsInput";
import { UserUpdateWithoutPlantsInput } from "../inputs/UserUpdateWithoutPlantsInput";

@TypeGraphQL.InputType("UserUpsertWithoutPlantsInput", {
  isAbstract: true
})
export class UserUpsertWithoutPlantsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPlantsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPlantsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlantsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlantsInput;
}
