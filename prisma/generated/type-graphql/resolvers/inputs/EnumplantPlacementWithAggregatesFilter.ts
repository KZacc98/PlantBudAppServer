import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumplantPlacementFilter } from "../inputs/NestedEnumplantPlacementFilter";
import { NestedEnumplantPlacementWithAggregatesFilter } from "../inputs/NestedEnumplantPlacementWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { plantPlacement } from "../../enums/plantPlacement";

@TypeGraphQL.InputType("EnumplantPlacementWithAggregatesFilter", {
  isAbstract: true
})
export class EnumplantPlacementWithAggregatesFilter {
  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: true
  })
  equals?: "inside" | "outside" | "default" | undefined;

  @TypeGraphQL.Field(_type => [plantPlacement], {
    nullable: true
  })
  in?: Array<"inside" | "outside" | "default"> | undefined;

  @TypeGraphQL.Field(_type => [plantPlacement], {
    nullable: true
  })
  notIn?: Array<"inside" | "outside" | "default"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantPlacementWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumplantPlacementWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantPlacementFilter, {
    nullable: true
  })
  _min?: NestedEnumplantPlacementFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantPlacementFilter, {
    nullable: true
  })
  _max?: NestedEnumplantPlacementFilter | undefined;
}
