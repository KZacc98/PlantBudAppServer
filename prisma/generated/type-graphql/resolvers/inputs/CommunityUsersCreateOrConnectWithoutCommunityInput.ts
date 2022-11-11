import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateWithoutCommunityInput } from "../inputs/CommunityUsersCreateWithoutCommunityInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersCreateOrConnectWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersCreateOrConnectWithoutCommunityInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersCreateWithoutCommunityInput, {
    nullable: false
  })
  create!: CommunityUsersCreateWithoutCommunityInput;
}
