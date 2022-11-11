import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineOrderByWithRelationInput } from "../../../inputs/CareRoutineOrderByWithRelationInput";
import { CareRoutineWhereInput } from "../../../inputs/CareRoutineWhereInput";
import { CareRoutineWhereUniqueInput } from "../../../inputs/CareRoutineWhereUniqueInput";
import { CareRoutineScalarFieldEnum } from "../../../../enums/CareRoutineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  where?: CareRoutineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CareRoutineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: true
  })
  cursor?: CareRoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CareRoutineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "plantId" | "isCompleted" | "isActive" | "isShared" | "flag" | "createdAt" | "updatedAt"> | undefined;
}
