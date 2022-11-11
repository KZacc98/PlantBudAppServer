import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userType } from "../../enums/userType";

@TypeGraphQL.InputType("NestedEnumuserTypeFilter", {
  isAbstract: true
})
export class NestedEnumuserTypeFilter {
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
