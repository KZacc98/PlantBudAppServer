import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateManyUserInput } from "../inputs/CommunityUsersCreateManyUserInput";

@TypeGraphQL.InputType("CommunityUsersCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class CommunityUsersCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateManyUserInput], {
    nullable: false
  })
  data!: CommunityUsersCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
