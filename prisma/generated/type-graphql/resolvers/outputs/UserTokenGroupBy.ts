import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTokenCountAggregate } from "../outputs/UserTokenCountAggregate";
import { UserTokenMaxAggregate } from "../outputs/UserTokenMaxAggregate";
import { UserTokenMinAggregate } from "../outputs/UserTokenMinAggregate";

@TypeGraphQL.ObjectType("UserTokenGroupBy", {
  isAbstract: true
})
export class UserTokenGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresIn!: Date;

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
