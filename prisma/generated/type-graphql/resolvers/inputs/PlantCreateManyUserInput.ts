import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { plantPlacement } from "../../enums/plantPlacement";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.InputType("PlantCreateManyUserInput", {
  isAbstract: true
})
export class PlantCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
  plantImage?: string | undefined;

  @TypeGraphQL.Field(_type => plantState, {
    nullable: true
  })
  plantState?: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default" | undefined;

  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: true
  })
  plantPlacement?: "inside" | "outside" | "default" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
