import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommunitiesInput } from "../inputs/UserCreateWithoutCommunitiesInput";
import { UserUpdateWithoutCommunitiesInput } from "../inputs/UserUpdateWithoutCommunitiesInput";

@TypeGraphQL.InputType("UserUpsertWithoutCommunitiesInput", {
  isAbstract: true
})
export class UserUpsertWithoutCommunitiesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCommunitiesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCommunitiesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommunitiesInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommunitiesInput;
}
