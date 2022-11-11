import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepCreateInput } from "../../../inputs/RoutineStepCreateInput";
import { RoutineStepUpdateInput } from "../../../inputs/RoutineStepUpdateInput";
import { RoutineStepWhereUniqueInput } from "../../../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoutineStepCreateInput, {
    nullable: false
  })
  create!: RoutineStepCreateInput;

  @TypeGraphQL.Field(_type => RoutineStepUpdateInput, {
    nullable: false
  })
  update!: RoutineStepUpdateInput;
}
