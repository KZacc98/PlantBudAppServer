import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantWhereInput } from "../inputs/PlantWhereInput";

@TypeGraphQL.InputType("PlantRelationFilter", {
  isAbstract: true
})
export class PlantRelationFilter {
  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  is?: PlantWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  isNot?: PlantWhereInput | undefined;
}
