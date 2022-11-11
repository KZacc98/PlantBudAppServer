import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumplantPlacementFilter } from "../inputs/NestedEnumplantPlacementFilter";
import { plantPlacement } from "../../enums/plantPlacement";

@TypeGraphQL.InputType("EnumplantPlacementFilter", {
  isAbstract: true
})
export class EnumplantPlacementFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumplantPlacementFilter, {
    nullable: true
  })
  not?: NestedEnumplantPlacementFilter | undefined;
}
