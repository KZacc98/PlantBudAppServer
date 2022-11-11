import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepOrderByWithAggregationInput } from "../../../inputs/RoutineStepOrderByWithAggregationInput";
import { RoutineStepScalarWhereWithAggregatesInput } from "../../../inputs/RoutineStepScalarWhereWithAggregatesInput";
import { RoutineStepWhereInput } from "../../../inputs/RoutineStepWhereInput";
import { RoutineStepScalarFieldEnum } from "../../../../enums/RoutineStepScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRoutineStepArgs {
  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  where?: RoutineStepWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RoutineStepOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "careRoutineId" | "description" | "stepFrequency" | "otherFrequency" | "isCompleted" | "completedAt" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => RoutineStepScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RoutineStepScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
