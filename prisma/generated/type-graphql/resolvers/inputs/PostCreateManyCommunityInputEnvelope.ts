import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCommunityInput } from "../inputs/PostCreateManyCommunityInput";

@TypeGraphQL.InputType("PostCreateManyCommunityInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyCommunityInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyCommunityInput], {
    nullable: false
  })
  data!: PostCreateManyCommunityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
