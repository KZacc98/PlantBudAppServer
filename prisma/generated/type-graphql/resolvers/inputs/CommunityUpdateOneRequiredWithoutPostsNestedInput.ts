import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateOrConnectWithoutPostsInput } from "../inputs/CommunityCreateOrConnectWithoutPostsInput";
import { CommunityCreateWithoutPostsInput } from "../inputs/CommunityCreateWithoutPostsInput";
import { CommunityUpdateWithoutPostsInput } from "../inputs/CommunityUpdateWithoutPostsInput";
import { CommunityUpsertWithoutPostsInput } from "../inputs/CommunityUpsertWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUpdateOneRequiredWithoutPostsNestedInput", {
  isAbstract: true
})
export class CommunityUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => CommunityCreateWithoutPostsInput, {
    nullable: true
  })
  create?: CommunityCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommunityCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: CommunityUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: true
  })
  connect?: CommunityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: CommunityUpdateWithoutPostsInput | undefined;
}
