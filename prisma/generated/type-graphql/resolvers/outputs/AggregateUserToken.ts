import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserToken", {
  isAbstract: true
})
export class AggregateUserToken {
  @TypeGraphQL.Field(_type => UserTokenCountAggregate, {
    nullable: true
  })
  _count!: UserTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenMinAggregate, {
    nullable: true
  })
  _min!: UserTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => UserTokenMaxAggregate, {
    nullable: true
  })
  _max!: UserTokenMaxAggregate | null;
}
