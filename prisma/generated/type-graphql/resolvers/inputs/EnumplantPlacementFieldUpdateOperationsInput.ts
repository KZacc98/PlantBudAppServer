import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { plantPlacement } from "../../enums/plantPlacement";

@TypeGraphQL.InputType("EnumplantPlacementFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumplantPlacementFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: true
  })
  set?: "inside" | "outside" | "default" | undefined;
}
