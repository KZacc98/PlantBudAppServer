import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { UserBadges } from "../models/UserBadges";
import { BadgeCount } from "../resolvers/outputs/BadgeCount";

@TypeGraphQL.ObjectType("Badge", {
  isAbstract: true
})
export class Badge {
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

  users?: UserBadges[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => BadgeCount, {
    nullable: true
  })
  _count?: BadgeCount | null;
}
