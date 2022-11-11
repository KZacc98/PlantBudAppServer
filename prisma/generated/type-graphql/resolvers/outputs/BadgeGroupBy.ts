import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeAvgAggregate } from "../outputs/BadgeAvgAggregate";
import { BadgeCountAggregate } from "../outputs/BadgeCountAggregate";
import { BadgeMaxAggregate } from "../outputs/BadgeMaxAggregate";
import { BadgeMinAggregate } from "../outputs/BadgeMinAggregate";
import { BadgeSumAggregate } from "../outputs/BadgeSumAggregate";

@TypeGraphQL.ObjectType("BadgeGroupBy", {
  isAbstract: true
})
export class BadgeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  badgeName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => BadgeCountAggregate, {
    nullable: true
  })
  _count!: BadgeCountAggregate | null;

  @TypeGraphQL.Field(_type => BadgeAvgAggregate, {
    nullable: true
  })
  _avg!: BadgeAvgAggregate | null;

  @TypeGraphQL.Field(_type => BadgeSumAggregate, {
    nullable: true
  })
  _sum!: BadgeSumAggregate | null;

  @TypeGraphQL.Field(_type => BadgeMinAggregate, {
    nullable: true
  })
  _min!: BadgeMinAggregate | null;

  @TypeGraphQL.Field(_type => BadgeMaxAggregate, {
    nullable: true
  })
  _max!: BadgeMaxAggregate | null;
}
