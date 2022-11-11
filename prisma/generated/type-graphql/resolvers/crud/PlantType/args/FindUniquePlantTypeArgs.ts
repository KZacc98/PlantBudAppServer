import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeWhereUniqueInput } from "../../../inputs/PlantTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PlantTypeWhereUniqueInput;
}
