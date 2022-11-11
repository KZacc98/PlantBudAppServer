import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommunitiesInput } from "../inputs/UserCreateOrConnectWithoutCommunitiesInput";
import { UserCreateWithoutCommunitiesInput } from "../inputs/UserCreateWithoutCommunitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCommunitiesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCommunitiesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommunitiesInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommunitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommunitiesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
