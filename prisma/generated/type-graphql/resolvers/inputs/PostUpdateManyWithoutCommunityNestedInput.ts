import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCommunityInputEnvelope } from "../inputs/PostCreateManyCommunityInputEnvelope";
import { PostCreateOrConnectWithoutCommunityInput } from "../inputs/PostCreateOrConnectWithoutCommunityInput";
import { PostCreateWithoutCommunityInput } from "../inputs/PostCreateWithoutCommunityInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCommunityInput } from "../inputs/PostUpdateManyWithWhereWithoutCommunityInput";
import { PostUpdateWithWhereUniqueWithoutCommunityInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCommunityInput";
import { PostUpsertWithWhereUniqueWithoutCommunityInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCommunityInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutCommunityNestedInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutCommunityNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCommunityInput], {
    nullable: true
  })
  create?: PostCreateWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCommunityInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCommunityInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCommunityInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCommunityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCommunityInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCommunityInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
