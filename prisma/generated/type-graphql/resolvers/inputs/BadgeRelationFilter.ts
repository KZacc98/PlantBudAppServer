import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeWhereInput } from "../inputs/BadgeWhereInput";

@TypeGraphQL.InputType("BadgeRelationFilter", {
  isAbstract: true
})
export class BadgeRelationFilter {
  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  is?: BadgeWhereInput | undefined;

  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  isNot?: BadgeWhereInput | undefined;
}
