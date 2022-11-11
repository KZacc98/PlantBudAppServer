import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeCreateManyInput } from "../../../inputs/PlantTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlantTypeArgs {
  @TypeGraphQL.Field(_type => [PlantTypeCreateManyInput], {
    nullable: false
  })
  data!: PlantTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
