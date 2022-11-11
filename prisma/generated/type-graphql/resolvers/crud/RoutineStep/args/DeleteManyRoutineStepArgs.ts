import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepWhereInput } from "../../../inputs/RoutineStepWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  where?: RoutineStepWhereInput | undefined;
}
