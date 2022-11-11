import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyCommunityInput } from "../inputs/CommunityUsersCreateManyCommunityInput";

@TypeGraphQL.InputType("CommunityUsersCreateManyCommunityInputEnvelope", {
  isAbstract: true
})
export class CommunityUsersCreateManyCommunityInputEnvelope {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateManyCommunityInput], {
    nullable: false
  })
  data!: CommunityUsersCreateManyCommunityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
