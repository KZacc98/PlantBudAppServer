import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantWhereUniqueInput } from "../../../inputs/PlantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlantArgs {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;
}