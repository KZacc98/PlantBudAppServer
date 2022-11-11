import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserTypeFilter } from "../inputs/NestedEnumuserTypeFilter";
import { userType } from "../../enums/userType";

@TypeGraphQL.InputType("EnumuserTypeFilter", {
  isAbstract: true
})
export class EnumuserTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumuserTypeFilter, {
    nullable: true
  })
  not?: NestedEnumuserTypeFilter | undefined;
}
