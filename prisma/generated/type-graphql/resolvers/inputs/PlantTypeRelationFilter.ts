import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantTypeWhereInput } from "../inputs/PlantTypeWhereInput";

@TypeGraphQL.InputType("PlantTypeRelationFilter", {
  isAbstract: true
})
export class PlantTypeRelationFilter {
  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  is?: PlantTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  isNot?: PlantTypeWhereInput | undefined;
}
