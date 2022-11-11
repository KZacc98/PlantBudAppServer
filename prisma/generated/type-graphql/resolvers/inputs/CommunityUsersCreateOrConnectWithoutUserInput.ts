import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateWithoutUserInput } from "../inputs/CommunityUsersCreateWithoutUserInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommunityUsersCreateWithoutUserInput;
}
