import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumplantStateFilter } from "../inputs/NestedEnumplantStateFilter";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.InputType("EnumplantStateFilter", {
  isAbstract: true
})
export class EnumplantStateFilter {
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
