import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyPlantTypeInputEnvelope } from "../inputs/PlantCreateManyPlantTypeInputEnvelope";
import { PlantCreateOrConnectWithoutPlantTypeInput } from "../inputs/PlantCreateOrConnectWithoutPlantTypeInput";
import { PlantCreateWithoutPlantTypeInput } from "../inputs/PlantCreateWithoutPlantTypeInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateNestedManyWithoutPlantTypeInput", {
  isAbstract: true
})
export class PlantCreateNestedManyWithoutPlantTypeInput {
  @TypeGraphQL.Field(_type => [PlantCreateWithoutPlantTypeInput], {
    nullable: true
  })
  create?: PlantCreateWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantCreateOrConnectWithoutPlantTypeInput], {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantCreateManyPlantTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PlantCreateManyPlantTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  connect?: PlantWhereUniqueInput[] | undefined;
}
