import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCommunityInput } from "../inputs/PostCreateWithoutCommunityInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutCommunityInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutCommunityInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommunityInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommunityInput;
}
