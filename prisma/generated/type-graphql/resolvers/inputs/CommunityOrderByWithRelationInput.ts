import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersOrderByRelationAggregateInput } from "../inputs/CommunityUsersOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommunityOrderByWithRelationInput", {
  isAbstract: true
})
export class CommunityOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  communityName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: CommunityUsersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
