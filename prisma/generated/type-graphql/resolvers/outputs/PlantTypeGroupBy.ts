import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeCountAggregate } from "../outputs/PlantTypeCountAggregate";
import { PlantTypeMaxAggregate } from "../outputs/PlantTypeMaxAggregate";
import { PlantTypeMinAggregate } from "../outputs/PlantTypeMinAggregate";

@TypeGraphQL.ObjectType("PlantTypeGroupBy", {
  isAbstract: true
})
export class PlantTypeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  species!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => PlantTypeCountAggregate, {
    nullable: true
  })
  _count!: PlantTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => PlantTypeMinAggregate, {
    nullable: true
  })
  _min!: PlantTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => PlantTypeMaxAggregate, {
    nullable: true
  })
  _max!: PlantTypeMaxAggregate | null;
}
