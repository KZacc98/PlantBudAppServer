import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepOrderByWithRelationInput } from "../../../inputs/RoutineStepOrderByWithRelationInput";
import { RoutineStepWhereInput } from "../../../inputs/RoutineStepWhereInput";
import { RoutineStepWhereUniqueInput } from "../../../inputs/RoutineStepWhereUniqueInput";
import { RoutineStepScalarFieldEnum } from "../../../../enums/RoutineStepScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CareRoutineRoutineStepsArgs {
  @TypeGraphQL.Field(_type => RoutineStepWhereInput, {
    nullable: true
  })
  where?: RoutineStepWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RoutineStepOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RoutineStepWhereUniqueInput, {
    nullable: true
  })
  cursor?: RoutineStepWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RoutineStepScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "careRoutineId" | "description" | "stepFrequency" | "otherFrequency" | "isCompleted" | "completedAt" | "createdAt" | "updatedAt"> | undefined;
}
