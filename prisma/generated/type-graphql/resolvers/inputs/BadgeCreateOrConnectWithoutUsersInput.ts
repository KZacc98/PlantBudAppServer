import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeCreateWithoutUsersInput } from "../inputs/BadgeCreateWithoutUsersInput";
import { BadgeWhereUniqueInput } from "../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.InputType("BadgeCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class BadgeCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: false
  })
  where!: BadgeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BadgeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: BadgeCreateWithoutUsersInput;
}
