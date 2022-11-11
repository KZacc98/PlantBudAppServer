import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserBadgesCountAggregate } from "../outputs/UserBadgesCountAggregate";
import { UserBadgesMaxAggregate } from "../outputs/UserBadgesMaxAggregate";
import { UserBadgesMinAggregate } from "../outputs/UserBadgesMinAggregate";

@TypeGraphQL.ObjectType("UserBadgesGroupBy", {
  isAbstract: true
})
export class UserBadgesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  badgeId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
