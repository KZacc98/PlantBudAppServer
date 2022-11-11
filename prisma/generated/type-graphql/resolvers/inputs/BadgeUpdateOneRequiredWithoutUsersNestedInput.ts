import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeCreateOrConnectWithoutUsersInput } from "../inputs/BadgeCreateOrConnectWithoutUsersInput";
import { BadgeCreateWithoutUsersInput } from "../inputs/BadgeCreateWithoutUsersInput";
import { BadgeUpdateWithoutUsersInput } from "../inputs/BadgeUpdateWithoutUsersInput";
import { BadgeUpsertWithoutUsersInput } from "../inputs/BadgeUpsertWithoutUsersInput";
import { BadgeWhereUniqueInput } from "../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.InputType("BadgeUpdateOneRequiredWithoutUsersNestedInput", {
  isAbstract: true
})
export class BadgeUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => BadgeCreateWithoutUsersInput, {
    nullable: true
  })
  create?: BadgeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BadgeCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BadgeUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: BadgeUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: true
  })
  connect?: BadgeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BadgeUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: BadgeUpdateWithoutUsersInput | undefined;
}