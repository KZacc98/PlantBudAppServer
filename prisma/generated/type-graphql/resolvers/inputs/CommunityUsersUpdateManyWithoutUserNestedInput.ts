import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyUserInputEnvelope } from "../inputs/CommunityUsersCreateManyUserInputEnvelope";
import { CommunityUsersCreateOrConnectWithoutUserInput } from "../inputs/CommunityUsersCreateOrConnectWithoutUserInput";
import { CommunityUsersCreateWithoutUserInput } from "../inputs/CommunityUsersCreateWithoutUserInput";
import { CommunityUsersScalarWhereInput } from "../inputs/CommunityUsersScalarWhereInput";
import { CommunityUsersUpdateManyWithWhereWithoutUserInput } from "../inputs/CommunityUsersUpdateManyWithWhereWithoutUserInput";
import { CommunityUsersUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommunityUsersUpdateWithWhereUniqueWithoutUserInput";
import { CommunityUsersUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommunityUsersUpsertWithWhereUniqueWithoutUserInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class CommunityUsersUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommunityUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommunityUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CommunityUsersUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommunityUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  set?: CommunityUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommunityUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  delete?: CommunityUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CommunityUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CommunityUsersUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CommunityUsersUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommunityUsersScalarWhereInput[] | undefined;
}
