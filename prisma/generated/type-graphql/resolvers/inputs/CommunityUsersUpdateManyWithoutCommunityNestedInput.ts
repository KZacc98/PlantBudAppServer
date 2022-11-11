import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyCommunityInputEnvelope } from "../inputs/CommunityUsersCreateManyCommunityInputEnvelope";
import { CommunityUsersCreateOrConnectWithoutCommunityInput } from "../inputs/CommunityUsersCreateOrConnectWithoutCommunityInput";
import { CommunityUsersCreateWithoutCommunityInput } from "../inputs/CommunityUsersCreateWithoutCommunityInput";
import { CommunityUsersScalarWhereInput } from "../inputs/CommunityUsersScalarWhereInput";
import { CommunityUsersUpdateManyWithWhereWithoutCommunityInput } from "../inputs/CommunityUsersUpdateManyWithWhereWithoutCommunityInput";
import { CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput } from "../inputs/CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput";
import { CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput } from "../inputs/CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpdateManyWithoutCommunityNestedInput", {
  isAbstract: true
})
export class CommunityUsersUpdateManyWithoutCommunityNestedInput {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateWithoutCommunityInput], {
    nullable: true
  })
  create?: CommunityUsersCreateWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersCreateOrConnectWithoutCommunityInput], {
    nullable: true
  })
  connectOrCreate?: CommunityUsersCreateOrConnectWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput], {
    nullable: true
  })
  upsert?: CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCreateManyCommunityInputEnvelope, {
    nullable: true
  })
  createMany?: CommunityUsersCreateManyCommunityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput], {
    nullable: true
  })
  update?: CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersUpdateManyWithWhereWithoutCommunityInput], {
    nullable: true
  })
  updateMany?: CommunityUsersUpdateManyWithWhereWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommunityUsersScalarWhereInput[] | undefined;
}
