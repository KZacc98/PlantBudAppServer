import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCountAggregate } from "../outputs/CareRoutineCountAggregate";
import { CareRoutineMaxAggregate } from "../outputs/CareRoutineMaxAggregate";
import { CareRoutineMinAggregate } from "../outputs/CareRoutineMinAggregate";

@TypeGraphQL.ObjectType("AggregateCareRoutine", {
  isAbstract: true
})
export class AggregateCareRoutine {
  @TypeGraphQL.Field(_type => CareRoutineCountAggregate, {
    nullable: true
  })
  _count!: CareRoutineCountAggregate | null;

  @TypeGraphQL.Field(_type => CareRoutineMinAggregate, {
    nullable: true
  })
  _min!: CareRoutineMinAggregate | null;

  @TypeGraphQL.Field(_type => CareRoutineMaxAggregate, {
    nullable: true
  })
  _max!: CareRoutineMaxAggregate | null;
}
