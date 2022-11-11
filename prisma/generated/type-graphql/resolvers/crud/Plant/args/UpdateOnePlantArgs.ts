import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantUpdateInput } from "../../../inputs/PlantUpdateInput";
import { PlantWhereUniqueInput } from "../../../inputs/PlantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlantArgs {
  @TypeGraphQL.Field(_type => PlantUpdateInput, {
    nullable: false
  })
  data!: PlantUpdateInput;

  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;
}
