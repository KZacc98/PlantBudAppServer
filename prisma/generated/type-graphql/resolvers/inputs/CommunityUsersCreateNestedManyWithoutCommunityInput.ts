import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyCommunityInputEnvelope } from "../inputs/CommunityUsersCreateManyCommunityInputEnvelope";
import { CommunityUsersCreateOrConnectWithoutCommunityInput } from "../inputs/CommunityUsersCreateOrConnectWithoutCommunityInput";
import { CommunityUsersCreateWithoutCommunityInput } from "../inputs/CommunityUsersCreateWithoutCommunityInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersCreateNestedManyWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersCreateNestedManyWithoutCommunityInput {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateWithoutCommunityInput], {
    nullable: true
  })
  create?: CommunityUsersCreateWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersCreateOrConnectWithoutCommunityInput], {
    nullable: true
  })
  connectOrCreate?: CommunityUsersCreateOrConnectWithoutCommunityInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCreateManyCommunityInputEnvelope, {
    nullable: true
  })
  createMany?: CommunityUsersCreateManyCommunityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CommunityUsersWhereUniqueInput[] | undefined;
}
