import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeUpdateManyMutationInput } from "../../../inputs/PlantTypeUpdateManyMutationInput";
import { PlantTypeWhereInput } from "../../../inputs/PlantTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlantTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  where?: PlantTypeWhereInput | undefined;
}
