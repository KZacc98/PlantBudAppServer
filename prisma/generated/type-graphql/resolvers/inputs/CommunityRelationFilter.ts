import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityWhereInput } from "../inputs/CommunityWhereInput";

@TypeGraphQL.InputType("CommunityRelationFilter", {
  isAbstract: true
})
export class CommunityRelationFilter {
  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  is?: CommunityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  isNot?: CommunityWhereInput | undefined;
}
