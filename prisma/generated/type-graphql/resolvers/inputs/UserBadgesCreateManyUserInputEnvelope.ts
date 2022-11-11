import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyUserInput } from "../inputs/UserBadgesCreateManyUserInput";

@TypeGraphQL.InputType("UserBadgesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserBadgesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserBadgesCreateManyUserInput], {
    nullable: false
  })
  data!: UserBadgesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
