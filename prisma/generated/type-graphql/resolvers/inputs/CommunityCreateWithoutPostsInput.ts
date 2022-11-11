import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateNestedManyWithoutCommunityInput } from "../inputs/CommunityUsersCreateNestedManyWithoutCommunityInput";

@TypeGraphQL.InputType("CommunityCreateWithoutPostsInput", {
  isAbstract: true
})
export class CommunityCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityName!: string;

  @TypeGraphQL.Field(_type => CommunityUsersCreateNestedManyWithoutCommunityInput, {
    nullable: true
  })
  users?: CommunityUsersCreateNestedManyWithoutCommunityInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
