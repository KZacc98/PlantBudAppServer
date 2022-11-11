import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.InputType("EnumplantStateFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumplantStateFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => plantState, {
    nullable: true
  })
  set?: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default" | undefined;
}
