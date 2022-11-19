import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { CommunityUsersOrderByRelationAggregateInput } from "../inputs/CommunityUsersOrderByRelationAggregateInput";
import { PlantOrderByRelationAggregateInput } from "../inputs/PlantOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { UserBadgesOrderByRelationAggregateInput } from "../inputs/UserBadgesOrderByRelationAggregateInput";
import { UserTokenOrderByRelationAggregateInput } from "../inputs/UserTokenOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phoneNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlantOrderByRelationAggregateInput, {
    nullable: true
  })
  plants?: PlantOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesOrderByRelationAggregateInput, {
    nullable: true
  })
  badges?: UserBadgesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  communities?: CommunityUsersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenOrderByRelationAggregateInput, {
    nullable: true
  })
  token?: UserTokenOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  points?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
