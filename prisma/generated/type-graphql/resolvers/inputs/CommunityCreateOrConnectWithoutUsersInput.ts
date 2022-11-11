import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateWithoutUsersInput } from "../inputs/CommunityCreateWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class CommunityCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: false
  })
  where!: CommunityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommunityCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CommunityCreateWithoutUsersInput;
}
