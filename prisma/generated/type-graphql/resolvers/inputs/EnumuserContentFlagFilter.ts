import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserContentFlagFilter } from "../inputs/NestedEnumuserContentFlagFilter";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("EnumuserContentFlagFilter", {
  isAbstract: true
})
export class EnumuserContentFlagFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumuserContentFlagFilter, {
    nullable: true
  })
  not?: NestedEnumuserContentFlagFilter | undefined;
}
