import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyPlantTypeInputEnvelope } from "../inputs/PlantCreateManyPlantTypeInputEnvelope";
import { PlantCreateOrConnectWithoutPlantTypeInput } from "../inputs/PlantCreateOrConnectWithoutPlantTypeInput";
import { PlantCreateWithoutPlantTypeInput } from "../inputs/PlantCreateWithoutPlantTypeInput";
import { PlantScalarWhereInput } from "../inputs/PlantScalarWhereInput";
import { PlantUpdateManyWithWhereWithoutPlantTypeInput } from "../inputs/PlantUpdateManyWithWhereWithoutPlantTypeInput";
import { PlantUpdateWithWhereUniqueWithoutPlantTypeInput } from "../inputs/PlantUpdateWithWhereUniqueWithoutPlantTypeInput";
import { PlantUpsertWithWhereUniqueWithoutPlantTypeInput } from "../inputs/PlantUpsertWithWhereUniqueWithoutPlantTypeInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpdateManyWithoutPlantTypeNestedInput", {
  isAbstract: true
})
export class PlantUpdateManyWithoutPlantTypeNestedInput {
  @TypeGraphQL.Field(_type => [PlantCreateWithoutPlantTypeInput], {
    nullable: true
  })
  create?: PlantCreateWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantCreateOrConnectWithoutPlantTypeInput], {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantUpsertWithWhereUniqueWithoutPlantTypeInput], {
    nullable: true
  })
  upsert?: PlantUpsertWithWhereUniqueWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantCreateManyPlantTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PlantCreateManyPlantTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  set?: PlantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  delete?: PlantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  connect?: PlantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantUpdateWithWhereUniqueWithoutPlantTypeInput], {
    nullable: true
  })
  update?: PlantUpdateWithWhereUniqueWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantUpdateManyWithWhereWithoutPlantTypeInput], {
    nullable: true
  })
  updateMany?: PlantUpdateManyWithWhereWithoutPlantTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlantScalarWhereInput[] | undefined;
}
