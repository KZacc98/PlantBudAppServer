import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCountAggregate } from "../outputs/RoutineStepCountAggregate";
import { RoutineStepMaxAggregate } from "../outputs/RoutineStepMaxAggregate";
import { RoutineStepMinAggregate } from "../outputs/RoutineStepMinAggregate";

@TypeGraphQL.ObjectType("AggregateRoutineStep", {
  isAbstract: true
})
export class AggregateRoutineStep {
  @TypeGraphQL.Field(_type => RoutineStepCountAggregate, {
    nullable: true
  })
  _count!: RoutineStepCountAggregate | null;

  @TypeGraphQL.Field(_type => RoutineStepMinAggregate, {
    nullable: true
  })
  _min!: RoutineStepMinAggregate | null;

  @TypeGraphQL.Field(_type => RoutineStepMaxAggregate, {
    nullable: true
  })
  _max!: RoutineStepMaxAggregate | null;
}
