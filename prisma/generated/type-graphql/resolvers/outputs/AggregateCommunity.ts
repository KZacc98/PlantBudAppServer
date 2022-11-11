import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCountAggregate } from "../outputs/CommunityCountAggregate";
import { CommunityMaxAggregate } from "../outputs/CommunityMaxAggregate";
import { CommunityMinAggregate } from "../outputs/CommunityMinAggregate";

@TypeGraphQL.ObjectType("AggregateCommunity", {
  isAbstract: true
})
export class AggregateCommunity {
  @TypeGraphQL.Field(_type => CommunityCountAggregate, {
    nullable: true
  })
  _count!: CommunityCountAggregate | null;

  @TypeGraphQL.Field(_type => CommunityMinAggregate, {
    nullable: true
  })
  _min!: CommunityMinAggregate | null;

  @TypeGraphQL.Field(_type => CommunityMaxAggregate, {
    nullable: true
  })
  _max!: CommunityMaxAggregate | null;
}
