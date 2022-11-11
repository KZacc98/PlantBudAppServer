import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateWithoutPostsInput } from "../inputs/CommunityCreateWithoutPostsInput";
import { CommunityUpdateWithoutPostsInput } from "../inputs/CommunityUpdateWithoutPostsInput";

@TypeGraphQL.InputType("CommunityUpsertWithoutPostsInput", {
  isAbstract: true
})
export class CommunityUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => CommunityUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: CommunityUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => CommunityCreateWithoutPostsInput, {
    nullable: false
  })
  create!: CommunityCreateWithoutPostsInput;
}
