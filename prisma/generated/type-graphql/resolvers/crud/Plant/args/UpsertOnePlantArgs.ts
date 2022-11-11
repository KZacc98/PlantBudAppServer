import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantCreateInput } from "../../../inputs/PlantCreateInput";
import { PlantUpdateInput } from "../../../inputs/PlantUpdateInput";
import { PlantWhereUniqueInput } from "../../../inputs/PlantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlantArgs {
  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: false
  })
  where!: PlantWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlantCreateInput, {
    nullable: false
  })
  create!: PlantCreateInput;

  @TypeGraphQL.Field(_type => PlantUpdateInput, {
    nullable: false
  })
  update!: PlantUpdateInput;
}
