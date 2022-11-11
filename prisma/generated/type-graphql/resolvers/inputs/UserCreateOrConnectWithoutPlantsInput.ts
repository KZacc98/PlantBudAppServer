import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlantsInput } from "../inputs/UserCreateWithoutPlantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPlantsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPlantsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlantsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlantsInput;
}
