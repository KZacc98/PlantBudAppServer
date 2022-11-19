import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserTokenWhereUniqueInput;
}
