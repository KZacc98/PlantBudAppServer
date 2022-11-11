import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepWhereUniqueInput } from "../../../inputs/RoutineStepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: false
  })
  where!: RoutineStepWhereUniqueInput;
}
