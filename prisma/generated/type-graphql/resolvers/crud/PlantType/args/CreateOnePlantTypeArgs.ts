import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeCreateInput } from "../../../inputs/PlantTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeCreateInput, {
    nullable: false
  })
  data!: PlantTypeCreateInput;
}
