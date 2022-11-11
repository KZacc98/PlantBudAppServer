import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyUserInputEnvelope } from "../inputs/CommunityUsersCreateManyUserInputEnvelope";
import { CommunityUsersCreateOrConnectWithoutUserInput } from "../inputs/CommunityUsersCreateOrConnectWithoutUserInput";
import { CommunityUsersCreateWithoutUserInput } from "../inputs/CommunityUsersCreateWithoutUserInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommunityUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommunityUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommunityUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommunityUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CommunityUsersWhereUniqueInput[] | undefined;
}
