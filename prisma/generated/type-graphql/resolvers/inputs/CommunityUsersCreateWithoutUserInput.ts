import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateNestedOneWithoutUsersInput } from "../inputs/CommunityCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType("CommunityUsersCreateWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => CommunityCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  community!: CommunityCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
