import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantUpdateManyMutationInput } from "../../../inputs/PlantUpdateManyMutationInput";
import { PlantWhereInput } from "../../../inputs/PlantWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlantArgs {
  @TypeGraphQL.Field(_type => PlantUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlantUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  where?: PlantWhereInput | undefined;
}
