import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCountAggregate } from "../outputs/CommunityUsersCountAggregate";
import { CommunityUsersMaxAggregate } from "../outputs/CommunityUsersMaxAggregate";
import { CommunityUsersMinAggregate } from "../outputs/CommunityUsersMinAggregate";

@TypeGraphQL.ObjectType("AggregateCommunityUsers", {
  isAbstract: true
})
export class AggregateCommunityUsers {
  @TypeGraphQL.Field(_type => CommunityUsersCountAggregate, {
    nullable: true
  })
  _count!: CommunityUsersCountAggregate | null;

  @TypeGraphQL.Field(_type => CommunityUsersMinAggregate, {
    nullable: true
  })
  _min!: CommunityUsersMinAggregate | null;

  @TypeGraphQL.Field(_type => CommunityUsersMaxAggregate, {
    nullable: true
  })
  _max!: CommunityUsersMaxAggregate | null;
}
