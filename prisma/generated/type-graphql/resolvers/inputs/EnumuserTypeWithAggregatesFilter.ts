import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserTypeFilter } from "../inputs/NestedEnumuserTypeFilter";
import { NestedEnumuserTypeWithAggregatesFilter } from "../inputs/NestedEnumuserTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { userType } from "../../enums/userType";

@TypeGraphQL.InputType("EnumuserTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumuserTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => userType, {
    nullable: true
  })
  equals?: "user" | "admin" | undefined;

  @TypeGraphQL.Field(_type => [userType], {
    nullable: true
  })
  in?: Array<"user" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => [userType], {
    nullable: true
  })
  notIn?: Array<"user" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumuserTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumuserTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumuserTypeFilter | undefined;
}
