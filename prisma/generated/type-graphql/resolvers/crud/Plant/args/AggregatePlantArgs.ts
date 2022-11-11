import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlantOrderByWithRelationInput } from "../../../inputs/PlantOrderByWithRelationInput";
import { PlantWhereInput } from "../../../inputs/PlantWhereInput";
import { PlantWhereUniqueInput } from "../../../inputs/PlantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePlantArgs {
  @TypeGraphQL.Field(_type => PlantWhereInput, {
    nullable: true
  })
  where?: PlantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlantOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlantOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
