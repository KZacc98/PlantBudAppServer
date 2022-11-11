import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeCreateInput } from "../../../inputs/PlantTypeCreateInput";
import { PlantTypeUpdateInput } from "../../../inputs/PlantTypeUpdateInput";
import { PlantTypeWhereUniqueInput } from "../../../inputs/PlantTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PlantTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantTypeCreateInput, {
    nullable: false
  })
  create!: PlantTypeCreateInput;

  @TypeGraphQL.Field(_type => PlantTypeUpdateInput, {
    nullable: false
  })
  update!: PlantTypeUpdateInput;
}
