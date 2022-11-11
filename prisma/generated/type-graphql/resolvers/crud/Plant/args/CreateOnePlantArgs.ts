import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantCreateInput } from "../../../inputs/PlantCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlantArgs {
  @TypeGraphQL.Field(_type => PlantCreateInput, {
    nullable: false
  })
  data!: PlantCreateInput;
}
