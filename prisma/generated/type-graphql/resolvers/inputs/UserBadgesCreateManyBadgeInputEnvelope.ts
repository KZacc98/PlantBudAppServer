import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCreateManyBadgeInput } from "../inputs/UserBadgesCreateManyBadgeInput";

@TypeGraphQL.InputType("UserBadgesCreateManyBadgeInputEnvelope", {
  isAbstract: true
})
export class UserBadgesCreateManyBadgeInputEnvelope {
  @TypeGraphQL.Field(_type => [UserBadgesCreateManyBadgeInput], {
    nullable: false
  })
  data!: UserBadgesCreateManyBadgeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
