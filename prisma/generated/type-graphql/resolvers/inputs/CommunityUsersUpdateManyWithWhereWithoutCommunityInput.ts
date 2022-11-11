import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersScalarWhereInput } from "../inputs/CommunityUsersScalarWhereInput";
import { CommunityUsersUpdateManyMutationInput } from "../inputs/CommunityUsersUpdateManyMutationInput";

@TypeGraphQL.InputType("CommunityUsersUpdateManyWithWhereWithoutCommunityInput", {
  isAbstract: true
})
export class CommunityUsersUpdateManyWithWhereWithoutCommunityInput {
  @TypeGraphQL.Field(_type => CommunityUsersScalarWhereInput, {
    nullable: false
  })
  where!: CommunityUsersScalarWhereInput;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommunityUsersUpdateManyMutationInput;
}
