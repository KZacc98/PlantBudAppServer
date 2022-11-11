import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommunitiesInput } from "../inputs/UserCreateOrConnectWithoutCommunitiesInput";
import { UserCreateWithoutCommunitiesInput } from "../inputs/UserCreateWithoutCommunitiesInput";
import { UserUpdateWithoutCommunitiesInput } from "../inputs/UserUpdateWithoutCommunitiesInput";
import { UserUpsertWithoutCommunitiesInput } from "../inputs/UserUpsertWithoutCommunitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCommunitiesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCommunitiesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommunitiesInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommunitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommunitiesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommunitiesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommunitiesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommunitiesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCommunitiesInput | undefined;
}
