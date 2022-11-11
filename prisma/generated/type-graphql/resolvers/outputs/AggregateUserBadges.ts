import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCountAggregate } from "../outputs/UserBadgesCountAggregate";
import { UserBadgesMaxAggregate } from "../outputs/UserBadgesMaxAggregate";
import { UserBadgesMinAggregate } from "../outputs/UserBadgesMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserBadges", {
  isAbstract: true
})
export class AggregateUserBadges {
  @TypeGraphQL.Field(_type => UserBadgesCountAggregate, {
    nullable: true
  })
  _count!: UserBadgesCountAggregate | null;

  @TypeGraphQL.Field(_type => UserBadgesMinAggregate, {
    nullable: true
  })
  _min!: UserBadgesMinAggregate | null;

  @TypeGraphQL.Field(_type => UserBadgesMaxAggregate, {
    nullable: true
  })
  _max!: UserBadgesMaxAggregate | null;
}
