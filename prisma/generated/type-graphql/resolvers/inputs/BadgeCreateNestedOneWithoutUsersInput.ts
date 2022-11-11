import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeCreateOrConnectWithoutUsersInput } from "../inputs/BadgeCreateOrConnectWithoutUsersInput";
import { BadgeCreateWithoutUsersInput } from "../inputs/BadgeCreateWithoutUsersInput";
import { BadgeWhereUniqueInput } from "../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.InputType("BadgeCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class BadgeCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => BadgeCreateWithoutUsersInput, {
    nullable: true
  })
  create?: BadgeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BadgeCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: true
  })
  connect?: BadgeWhereUniqueInput | undefined;
}
