import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantWhereInput } from "../inputs/PlantWhereInput";

@TypeGraphQL.InputType("PlantListRelationFilter", {
  isAbstract: true
})
export class PlantListRelationFilter {
  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  every?: PlantWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  some?: PlantWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  none?: PlantWhereInput | undefined;
}
