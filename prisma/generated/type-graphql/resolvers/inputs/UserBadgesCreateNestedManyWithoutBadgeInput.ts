import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyBadgeInputEnvelope } from "../inputs/UserBadgesCreateManyBadgeInputEnvelope";
import { UserBadgesCreateOrConnectWithoutBadgeInput } from "../inputs/UserBadgesCreateOrConnectWithoutBadgeInput";
import { UserBadgesCreateWithoutBadgeInput } from "../inputs/UserBadgesCreateWithoutBadgeInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesCreateNestedManyWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesCreateNestedManyWithoutBadgeInput {
  @TypeGraphQL.Field(_type => [UserBadgesCreateWithoutBadgeInput], {
    nullable: true
  })
  create?: UserBadgesCreateWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesCreateOrConnectWithoutBadgeInput], {
    nullable: true
  })
  connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserBadgesCreateManyBadgeInputEnvelope, {
    nullable: true
  })
  createMany?: UserBadgesCreateManyBadgeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  connect?: UserBadgesWhereUniqueInput[] | undefined;
}
