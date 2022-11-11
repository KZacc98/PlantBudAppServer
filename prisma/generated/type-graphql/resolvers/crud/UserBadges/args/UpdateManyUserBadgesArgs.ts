import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesUpdateManyMutationInput } from "../../../inputs/UserBadgesUpdateManyMutationInput";
import { UserBadgesWhereInput } from "../../../inputs/UserBadgesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserBadgesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  where?: UserBadgesWhereInput | undefined;
}
