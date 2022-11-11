import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepCreateInput } from "../../../inputs/RoutineStepCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepCreateInput, {
    nullable: false
  })
  data!: RoutineStepCreateInput;
}
