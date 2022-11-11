import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCommunityInput } from "../inputs/PostUpdateWithoutCommunityInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutCommunityInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutCommunityInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCommunityInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCommunityInput;
}
