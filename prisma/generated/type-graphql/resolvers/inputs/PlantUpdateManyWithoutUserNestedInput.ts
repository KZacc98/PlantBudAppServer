import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyUserInputEnvelope } from "../inputs/PlantCreateManyUserInputEnvelope";
import { PlantCreateOrConnectWithoutUserInput } from "../inputs/PlantCreateOrConnectWithoutUserInput";
import { PlantCreateWithoutUserInput } from "../inputs/PlantCreateWithoutUserInput";
import { PlantScalarWhereInput } from "../inputs/PlantScalarWhereInput";
import { PlantUpdateManyWithWhereWithoutUserInput } from "../inputs/PlantUpdateManyWithWhereWithoutUserInput";
import { PlantUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PlantUpdateWithWhereUniqueWithoutUserInput";
import { PlantUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PlantUpsertWithWhereUniqueWithoutUserInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class PlantUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [PlantCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlantCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PlantUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlantCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PlantUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PlantUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PlantUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlantScalarWhereInput[] | undefined;
}
