import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyBadgeInputEnvelope } from "../inputs/UserBadgesCreateManyBadgeInputEnvelope";
import { UserBadgesCreateOrConnectWithoutBadgeInput } from "../inputs/UserBadgesCreateOrConnectWithoutBadgeInput";
import { UserBadgesCreateWithoutBadgeInput } from "../inputs/UserBadgesCreateWithoutBadgeInput";
import { UserBadgesScalarWhereInput } from "../inputs/UserBadgesScalarWhereInput";
import { UserBadgesUpdateManyWithWhereWithoutBadgeInput } from "../inputs/UserBadgesUpdateManyWithWhereWithoutBadgeInput";
import { UserBadgesUpdateWithWhereUniqueWithoutBadgeInput } from "../inputs/UserBadgesUpdateWithWhereUniqueWithoutBadgeInput";
import { UserBadgesUpsertWithWhereUniqueWithoutBadgeInput } from "../inputs/UserBadgesUpsertWithWhereUniqueWithoutBadgeInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpdateManyWithoutBadgeNestedInput", {
  isAbstract: true
})
export class UserBadgesUpdateManyWithoutBadgeNestedInput {
  @TypeGraphQL.Field(_type => [UserBadgesCreateWithoutBadgeInput], {
    nullable: true
  })
  create?: UserBadgesCreateWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesCreateOrConnectWithoutBadgeInput], {
    nullable: true
  })
  connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesUpsertWithWhereUniqueWithoutBadgeInput], {
    nullable: true
  })
  upsert?: UserBadgesUpsertWithWhereUniqueWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserBadgesCreateManyBadgeInputEnvelope, {
    nullable: true
  })
  createMany?: UserBadgesCreateManyBadgeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  set?: UserBadgesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserBadgesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  delete?: UserBadgesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesWhereUniqueInput], {
    nullable: true
  })
  connect?: UserBadgesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesUpdateWithWhereUniqueWithoutBadgeInput], {
    nullable: true
  })
  update?: UserBadgesUpdateWithWhereUniqueWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesUpdateManyWithWhereWithoutBadgeInput], {
    nullable: true
  })
  updateMany?: UserBadgesUpdateManyWithWhereWithoutBadgeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserBadgesScalarWhereInput[] | undefined;
}
