import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserBadgesOrderByWithRelationInput } from "../../../inputs/UserBadgesOrderByWithRelationInput";
import { UserBadgesWhereInput } from "../../../inputs/UserBadgesWhereInput";
import { UserBadgesWhereUniqueInput } from "../../../inputs/UserBadgesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserBadgesArgs {
  @TypeGraphQL.Field(_type => UserBadgesWhereInput, {
    nullable: true
  })
  where?: UserBadgesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserBadgesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserBadgesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserBadgesWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserBadgesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
