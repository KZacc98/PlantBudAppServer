import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCommunityInput } from "../inputs/PostCreateWithoutCommunityInput";
import { PostUpdateWithoutCommunityInput } from "../inputs/PostUpdateWithoutCommunityInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutCommunityInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutCommunityInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCommunityInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCommunityInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommunityInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommunityInput;
}
