import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommunitiesInput } from "../inputs/UserCreateWithoutCommunitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCommunitiesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCommunitiesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommunitiesInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommunitiesInput;
}
