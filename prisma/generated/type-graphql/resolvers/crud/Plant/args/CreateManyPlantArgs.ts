import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantCreateManyInput } from "../../../inputs/PlantCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlantArgs {
  @TypeGraphQL.Field(_type => [PlantCreateManyInput], {
    nullable: false
  })
  data!: PlantCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
