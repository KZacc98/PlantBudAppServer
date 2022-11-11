import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeCreateWithoutUsersInput } from "../inputs/BadgeCreateWithoutUsersInput";
import { BadgeUpdateWithoutUsersInput } from "../inputs/BadgeUpdateWithoutUsersInput";

@TypeGraphQL.InputType("BadgeUpsertWithoutUsersInput", {
  isAbstract: true
})
export class BadgeUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => BadgeUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: BadgeUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => BadgeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: BadgeCreateWithoutUsersInput;
}
