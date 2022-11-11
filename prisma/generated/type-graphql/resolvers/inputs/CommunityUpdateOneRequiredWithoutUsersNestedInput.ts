import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateOrConnectWithoutUsersInput } from "../inputs/CommunityCreateOrConnectWithoutUsersInput";
import { CommunityCreateWithoutUsersInput } from "../inputs/CommunityCreateWithoutUsersInput";
import { CommunityUpdateWithoutUsersInput } from "../inputs/CommunityUpdateWithoutUsersInput";
import { CommunityUpsertWithoutUsersInput } from "../inputs/CommunityUpsertWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../inputs/CommunityWhereUniqueInput";

@TypeGraphQL.InputType("CommunityUpdateOneRequiredWithoutUsersNestedInput", {
  isAbstract: true
})
export class CommunityUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => CommunityCreateWithoutUsersInput, {
    nullable: true
  })
  create?: CommunityCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommunityCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: CommunityUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: true
  })
  connect?: CommunityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: CommunityUpdateWithoutUsersInput | undefined;
}
