import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepUpdateManyMutationInput } from "../../../inputs/RoutineStepUpdateManyMutationInput";
import { RoutineStepWhereInput } from "../../../inputs/RoutineStepWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepUpdateManyMutationInput, {
    nullable: false
  })
  data!: RoutineStepUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  where?: RoutineStepWhereInput | undefined;
}
