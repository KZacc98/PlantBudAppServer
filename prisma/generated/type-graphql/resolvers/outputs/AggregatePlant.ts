import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCountAggregate } from "../outputs/PlantCountAggregate";
import { PlantMaxAggregate } from "../outputs/PlantMaxAggregate";
import { PlantMinAggregate } from "../outputs/PlantMinAggregate";

@TypeGraphQL.ObjectType("AggregatePlant", {
  isAbstract: true
})
export class AggregatePlant {
  @TypeGraphQL.Field(_type => PlantCountAggregate, {
    nullable: true
  })
  _count!: PlantCountAggregate | null;

  @TypeGraphQL.Field(_type => PlantMinAggregate, {
    nullable: true
  })
  _min!: PlantMinAggregate | null;

  @TypeGraphQL.Field(_type => PlantMaxAggregate, {
    nullable: true
  })
  _max!: PlantMaxAggregate | null;
}
