import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCountAggregate } from "../outputs/PlantCountAggregate";
import { PlantMaxAggregate } from "../outputs/PlantMaxAggregate";
import { PlantMinAggregate } from "../outputs/PlantMinAggregate";
import { plantPlacement } from "../../enums/plantPlacement";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.ObjectType("PlantGroupBy", {
  isAbstract: true
})
export class PlantGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantTypeId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantImage!: string | null;

  @TypeGraphQL.Field(_type => plantState, {
    nullable: false
  })
  plantState!: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default";

  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: false
  })
  plantPlacement!: "inside" | "outside" | "default";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
