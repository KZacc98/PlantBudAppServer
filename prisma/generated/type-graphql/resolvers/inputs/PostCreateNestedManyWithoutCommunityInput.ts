import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCommunityInputEnvelope } from "../inputs/PostCreateManyCommunityInputEnvelope";
import { PostCreateOrConnectWithoutCommunityInput } from "../inputs/PostCreateOrConnectWithoutCommunityInput";
import { PostCreateWithoutCommunityInput } from "../inputs/PostCreateWithoutCommunityInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutCommunityInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutCommunityInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCommunityInput], {
    nullable: true
  })
  create?: PostCreateWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCommunityInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCommunityInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCommunityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
