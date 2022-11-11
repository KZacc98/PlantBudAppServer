import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeUpdateInput } from "../../../inputs/PlantTypeUpdateInput";
import { PlantTypeWhereUniqueInput } from "../../../inputs/PlantTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeUpdateInput, {
    nullable: false
  })
  data!: PlantTypeUpdateInput;

  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PlantTypeWhereUniqueInput;
}
