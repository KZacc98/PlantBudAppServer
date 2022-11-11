import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.InputType("NestedEnumplantStateFilter", {
  isAbstract: true
})
export class NestedEnumplantStateFilter {
  @TypeGraphQL.Field(_type => plantState, {
    nullable: true
  })
  equals?: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default" | undefined;

  @TypeGraphQL.Field(_type => [plantState], {
    nullable: true
  })
  in?: Array<"thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default"> | undefined;

  @TypeGraphQL.Field(_type => [plantState], {
    nullable: true
  })
  notIn?: Array<"thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantStateFilter, {
    nullable: true
  })
  not?: NestedEnumplantStateFilter | undefined;
}