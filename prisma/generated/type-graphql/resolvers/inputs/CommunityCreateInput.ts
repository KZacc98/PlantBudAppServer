import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCreateNestedManyWithoutCommunityInput } from "../inputs/CommunityUsersCreateNestedManyWithoutCommunityInput";
import { PostCreateNestedManyWithoutCommunityInput } from "../inputs/PostCreateNestedManyWithoutCommunityInput";

@TypeGraphQL.InputType("CommunityCreateInput", {
  isAbstract: true
})
export class CommunityCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityName!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutCommunityInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutCommunityInput | undefined;

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
