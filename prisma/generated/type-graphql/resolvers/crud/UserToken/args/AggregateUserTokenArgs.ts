import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenOrderByWithRelationInput } from "../../../inputs/UserTokenOrderByWithRelationInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";
import { UserTokenWhereUniqueInput } from "../../../inputs/UserTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  where?: UserTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserTokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserTokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
