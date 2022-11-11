import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUsersCountAggregate } from "../outputs/CommunityUsersCountAggregate";
import { CommunityUsersMaxAggregate } from "../outputs/CommunityUsersMaxAggregate";
import { CommunityUsersMinAggregate } from "../outputs/CommunityUsersMinAggregate";

@TypeGraphQL.ObjectType("CommunityUsersGroupBy", {
  isAbstract: true
})
export class CommunityUsersGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
