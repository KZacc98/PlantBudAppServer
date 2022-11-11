import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { plantPlacement } from "../../enums/plantPlacement";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.ObjectType("PlantMinAggregate", {
  isAbstract: true
})
export class PlantMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantTypeId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantImage!: string | null;

  @TypeGraphQL.Field(_type => plantState, {
    nullable: true
  })
  plantState!: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default" | null;

  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: true
  })
  plantPlacement!: "inside" | "outside" | "default" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
