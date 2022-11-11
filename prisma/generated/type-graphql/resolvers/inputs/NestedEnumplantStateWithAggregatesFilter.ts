import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumplantStateFilter } from "../inputs/NestedEnumplantStateFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { plantState } from "../../enums/plantState";

@TypeGraphQL.InputType("NestedEnumplantStateWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumplantStateWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumplantStateWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumplantStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantStateFilter, {
    nullable: true
  })
  _min?: NestedEnumplantStateFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumplantStateFilter, {
    nullable: true
  })
  _max?: NestedEnumplantStateFilter | undefined;
}
