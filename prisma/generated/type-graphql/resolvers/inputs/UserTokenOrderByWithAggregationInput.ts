import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCountOrderByAggregateInput } from "../inputs/UserTokenCountOrderByAggregateInput";
import { UserTokenMaxOrderByAggregateInput } from "../inputs/UserTokenMaxOrderByAggregateInput";
import { UserTokenMinOrderByAggregateInput } from "../inputs/UserTokenMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserTokenOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiresIn?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserTokenMinOrderByAggregateInput | undefined;
}
