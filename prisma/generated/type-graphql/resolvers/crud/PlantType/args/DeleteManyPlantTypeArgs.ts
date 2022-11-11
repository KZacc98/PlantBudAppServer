import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeWhereInput } from "../../../inputs/PlantTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  where?: PlantTypeWhereInput | undefined;
}
