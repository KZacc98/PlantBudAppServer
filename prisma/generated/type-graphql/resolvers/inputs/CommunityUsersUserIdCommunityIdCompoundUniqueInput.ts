import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommunityUsersUserIdCommunityIdCompoundUniqueInput", {
  isAbstract: true
})
export class CommunityUsersUserIdCommunityIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityId!: string;
}
