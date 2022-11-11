import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesCreateManyInput } from "../../../inputs/UserBadgesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserBadgesArgs {
  @TypeGraphQL.Field(_type => [UserBadgesCreateManyInput], {
    nullable: false
  })
  data!: UserBadgesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
