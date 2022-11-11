import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateWithoutCommunityInput } from "../inputs/CommunityUsersCreateWithoutCommunityInput";
import { CommunityUsersUpdateWithoutCommunityInput } from "../inputs/CommunityUsersUpdateWithoutCommunityInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateWithoutCommunityInput, {
    nullable: false
  })
  update!: CommunityUsersUpdateWithoutCommunityInput;

  @TypeGraphQL.Field(_type => CommunityUsersCreateWithoutCommunityInput, {
    nullable: false
  })
  create!: CommunityUsersCreateWithoutCommunityInput;
}
