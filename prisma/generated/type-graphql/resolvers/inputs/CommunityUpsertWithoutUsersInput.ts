import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateWithoutUsersInput } from "../inputs/CommunityCreateWithoutUsersInput";
import { CommunityUpdateWithoutUsersInput } from "../inputs/CommunityUpdateWithoutUsersInput";

@TypeGraphQL.InputType("CommunityUpsertWithoutUsersInput", {
  isAbstract: true
})
export class CommunityUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommunityUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: CommunityUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => CommunityCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CommunityCreateWithoutUsersInput;
}
