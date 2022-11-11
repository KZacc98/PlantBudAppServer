import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepUpdateInput } from "../../../inputs/RoutineStepUpdateInput";
import { RoutineStepWhereUniqueInput } from "../../../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepUpdateInput, {
    nullable: false
  })
  data!: RoutineStepUpdateInput;

  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;
}
