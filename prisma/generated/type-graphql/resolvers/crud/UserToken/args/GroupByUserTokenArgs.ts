import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserTokenOrderByWithAggregationInput } from "../../../inputs/UserTokenOrderByWithAggregationInput";
import { UserTokenScalarWhereWithAggregatesInput } from "../../../inputs/UserTokenScalarWhereWithAggregatesInput";
import { UserTokenWhereInput } from "../../../inputs/UserTokenWhereInput";
import { UserTokenScalarFieldEnum } from "../../../../enums/UserTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserTokenArgs {
  @TypeGraphQL.Field(_type => UserTokenWhereInput, {
    nullable: true
  })
  where?: UserTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserTokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserTokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserTokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "token" | "createdAt" | "updatedAt" | "expiresIn">;

  @TypeGraphQL.Field(_type => UserTokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserTokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
