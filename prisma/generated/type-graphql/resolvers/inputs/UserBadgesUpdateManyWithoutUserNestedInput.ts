import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyUserInputEnvelope } from "../inputs/UserBadgesCreateManyUserInputEnvelope";
import { UserBadgesCreateOrConnectWithoutUserInput } from "../inputs/UserBadgesCreateOrConnectWithoutUserInput";
import { UserBadgesCreateWithoutUserInput } from "../inputs/UserBadgesCreateWithoutUserInput";
import { UserBadgesScalarWhereInput } from "../inputs/UserBadgesScalarWhereInput";
import { UserBadgesUpdateManyWithWhereWithoutUserInput } from "../inputs/UserBadgesUpdateManyWithWhereWithoutUserInput";
import { UserBadgesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserBadgesUpdateWithWhereUniqueWithoutUserInput";
import { UserBadgesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserBadgesUpsertWithWhereUniqueWithoutUserInput";
import { UserBadgesWhereUniqueInput } from "../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.InputType("UserBadgesUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserBadgesUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserBadgesCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserBadgesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserBadgesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserBadgesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserBadgesCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserBadgesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserBadgesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserBadgesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserBadgesScalarWhereInput[] | undefined;
}
