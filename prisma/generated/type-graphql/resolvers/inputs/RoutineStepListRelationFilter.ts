import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepWhereInput } from "../inputs/RoutineStepWhereInput";

@TypeGraphQL.InputType("RoutineStepListRelationFilter", {
  isAbstract: true
})
export class RoutineStepListRelationFilter {
  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  every?: RoutineStepWhereInput | undefined;

  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  some?: RoutineStepWhereInput | undefined;

  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  none?: RoutineStepWhereInput | undefined;
}
