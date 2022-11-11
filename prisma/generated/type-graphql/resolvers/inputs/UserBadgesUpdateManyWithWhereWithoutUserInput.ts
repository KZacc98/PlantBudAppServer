import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesScalarWhereInput } from "../inputs/UserBadgesScalarWhereInput";
import { UserBadgesUpdateManyMutationInput } from "../inputs/UserBadgesUpdateManyMutationInput";

@TypeGraphQL.InputType("UserBadgesUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserBadgesScalarWhereInput, {
    nullable: false
  })
  where!: UserBadgesScalarWhereInput;

  @TypeGraphQL.Field(_type => UserBadgesUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserBadgesUpdateManyMutationInput;
}
