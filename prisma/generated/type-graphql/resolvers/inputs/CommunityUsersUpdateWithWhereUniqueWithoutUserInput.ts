import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersUpdateWithoutUserInput } from "../inputs/CommunityUsersUpdateWithoutUserInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CommunityUsersUpdateWithoutUserInput;
}
