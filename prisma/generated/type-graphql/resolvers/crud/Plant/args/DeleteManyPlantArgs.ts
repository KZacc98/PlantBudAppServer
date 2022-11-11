import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantWhereInput } from "../../../inputs/PlantWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlantArgs {
  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  where?: PlantWhereInput | undefined;
}
