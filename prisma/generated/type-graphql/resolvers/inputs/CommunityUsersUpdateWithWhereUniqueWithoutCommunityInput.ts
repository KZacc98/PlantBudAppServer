import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersUpdateWithoutCommunityInput } from "../inputs/CommunityUsersUpdateWithoutCommunityInput";
import { CommunityUsersWhereUniqueInput } from "../inputs/CommunityUsersWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput {
  @TypeGraphQL.Field(_type => CommunityUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateWithoutCommunityInput, {
    nullable: false
  })
  data!: CommunityUsersUpdateWithoutCommunityInput;
}
