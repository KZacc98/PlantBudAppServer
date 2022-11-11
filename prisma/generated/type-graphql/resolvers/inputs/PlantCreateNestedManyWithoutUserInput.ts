import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyUserInputEnvelope } from "../inputs/PlantCreateManyUserInputEnvelope";
import { PlantCreateOrConnectWithoutUserInput } from "../inputs/PlantCreateOrConnectWithoutUserInput";
import { PlantCreateWithoutUserInput } from "../inputs/PlantCreateWithoutUserInput";
import { PlantWhereUniqueInput } from "../inputs/PlantWhereUniqueInput";

@TypeGraphQL.InputType("PlantCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PlantCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PlantCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlantCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlantCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlantCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlantCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlantCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlantWhereUniqueInput], {
    nullable: true
  })
  connect?: PlantWhereUniqueInput[] | undefined;
}
