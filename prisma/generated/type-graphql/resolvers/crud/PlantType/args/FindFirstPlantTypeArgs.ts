import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantTypeOrderByWithRelationInput } from "../../../inputs/PlantTypeOrderByWithRelationInput";
import { PlantTypeWhereInput } from "../../../inputs/PlantTypeWhereInput";
import { PlantTypeWhereUniqueInput } from "../../../inputs/PlantTypeWhereUniqueInput";
import { PlantTypeScalarFieldEnum } from "../../../../enums/PlantTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPlantTypeArgs {
  @TypeGraphQL.Field(_type => PlantTypeWhereInput, {
    nullable: true
  })
  where?: PlantTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlantTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlantTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlantTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "species" | "type" | "description" | "createdAt" | "updatedAt"> | undefined;
}
