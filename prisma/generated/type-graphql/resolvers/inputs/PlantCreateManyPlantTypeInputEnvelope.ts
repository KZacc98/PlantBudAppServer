import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlantCreateManyPlantTypeInput } from "../inputs/PlantCreateManyPlantTypeInput";

@TypeGraphQL.InputType("PlantCreateManyPlantTypeInputEnvelope", {
  isAbstract: true
})
export class PlantCreateManyPlantTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PlantCreateManyPlantTypeInput], {
    nullable: false
  })
  data!: PlantCreateManyPlantTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
