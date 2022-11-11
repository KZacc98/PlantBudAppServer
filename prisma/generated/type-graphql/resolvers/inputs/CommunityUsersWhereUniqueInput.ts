import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersUserIdCommunityIdCompoundUniqueInput } from "../inputs/CommunityUsersUserIdCommunityIdCompoundUniqueInput";

@TypeGraphQL.InputType("CommunityUsersWhereUniqueInput", {
  isAbstract: true
})
export class CommunityUsersWhereUniqueInput {
  @TypeGraphQL.Field(_type => CommunityUsersUserIdCommunityIdCompoundUniqueInput, {
    nullable: true
  })
  userId_communityId?: CommunityUsersUserIdCommunityIdCompoundUniqueInput | undefined;
}
