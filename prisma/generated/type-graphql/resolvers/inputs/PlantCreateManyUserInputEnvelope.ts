import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyUserInput } from "../inputs/PlantCreateManyUserInput";

@TypeGraphQL.InputType("PlantCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PlantCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PlantCreateManyUserInput], {
    nullable: false
  })
  data!: PlantCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
