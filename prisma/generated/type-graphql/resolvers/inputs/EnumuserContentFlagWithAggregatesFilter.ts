import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserContentFlagFilter } from "../inputs/NestedEnumuserContentFlagFilter";
import { NestedEnumuserContentFlagWithAggregatesFilter } from "../inputs/NestedEnumuserContentFlagWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("EnumuserContentFlagWithAggregatesFilter", {
  isAbstract: true
})
export class EnumuserContentFlagWithAggregatesFilter {
  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  equals?: "offfensive" | "useful" | "best" | "default" | undefined;

  @TypeGraphQL.Field(_type => [userContentFlag], {
    nullable: true
  })
  in?: Array<"offfensive" | "useful" | "best" | "default"> | undefined;

  @TypeGraphQL.Field(_type => [userContentFlag], {
    nullable: true
  })
  notIn?: Array<"offfensive" | "useful" | "best" | "default"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserContentFlagWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumuserContentFlagWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserContentFlagFilter, {
    nullable: true
  })
  _min?: NestedEnumuserContentFlagFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserContentFlagFilter, {
    nullable: true
  })
  _max?: NestedEnumuserContentFlagFilter | undefined;
}
