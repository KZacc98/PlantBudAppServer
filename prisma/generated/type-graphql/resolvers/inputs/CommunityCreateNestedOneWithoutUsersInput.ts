import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateOrConnectWithoutUsersInput } from "../inputs/CommunityCreateOrConnectWithoutUsersInput";
import { CommunityCreateWithoutUsersInput } from "../inputs/CommunityCreateWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class CommunityCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommunityCreateWithoutUsersInput, {
    nullable: true
  })
  create?: CommunityCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommunityCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: true
  })
  connect?: CommunityWhereUniqueInput | undefined;
}
