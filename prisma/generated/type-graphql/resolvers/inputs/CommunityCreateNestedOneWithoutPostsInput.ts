import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateOrConnectWithoutPostsInput } from "../inputs/CommunityCreateOrConnectWithoutPostsInput";
import { CommunityCreateWithoutPostsInput } from "../inputs/CommunityCreateWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityCreateNestedOneWithoutPostsInput", {
  isAbstract: true
})
export class CommunityCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => CommunityCreateWithoutPostsInput, {
    nullable: true
  })
  create?: CommunityCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommunityCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: true
  })
  connect?: CommunityWhereUniqueInput | undefined;
}
