import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineOrderByWithAggregationInput } from "../../../inputs/CareRoutineOrderByWithAggregationInput";
import { CareRoutineScalarWhereWithAggregatesInput } from "../../../inputs/CareRoutineScalarWhereWithAggregatesInput";
import { CareRoutineWhereInput } from "../../../inputs/CareRoutineWhereInput";
import { CareRoutineScalarFieldEnum } from "../../../../enums/CareRoutineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  where?: CareRoutineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CareRoutineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "plantId" | "isCompleted" | "isActive" | "isShared" | "flag" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CareRoutineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CareRoutineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
