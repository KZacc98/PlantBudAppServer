import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyUserInputEnvelope } from "../inputs/UserBadgesCreateManyUserInputEnvelope";
import { UserBadgesCreateOrConnectWithoutUserInput } from "../inputs/UserBadgesCreateOrConnectWithoutUserInput";
import { UserBadgesCreateWithoutUserInput } from "../inputs/UserBadgesCreateWithoutUserInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserBadgesCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserBadgesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserBadgesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserBadgesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  connect?: UserBadgesWhereUniqueInput[] | undefined;
}
