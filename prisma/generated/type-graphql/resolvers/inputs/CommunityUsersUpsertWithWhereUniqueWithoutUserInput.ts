import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateWithoutUserInput } from "../inputs/CommunityUsersCreateWithoutUserInput";
import { CommunityUsersUpdateWithoutUserInput } from "../inputs/CommunityUsersUpdateWithoutUserInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CommunityUsersUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommunityUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommunityUsersCreateWithoutUserInput;
}
