import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCommunitiesInput } from "../inputs/UserCreateNestedOneWithoutCommunitiesInput";

@TypeGraphQL.InputType("CommunityUsersCreateWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersCreateWithoutCommunityInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommunitiesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommunitiesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
