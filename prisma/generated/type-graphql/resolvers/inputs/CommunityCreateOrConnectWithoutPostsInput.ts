import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateWithoutPostsInput } from "../inputs/CommunityCreateWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityCreateOrConnectWithoutPostsInput", {
  isAbstract: true
})
export class CommunityCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityCreateWithoutPostsInput, {
    nullable: false
  })
  create!: CommunityCreateWithoutPostsInput;
}
