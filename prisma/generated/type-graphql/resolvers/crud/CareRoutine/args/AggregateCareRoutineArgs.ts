import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineOrderByWithRelationInput } from "../../../inputs/CareRoutineOrderByWithRelationInput";
import { CareRoutineWhereInput } from "../../../inputs/CareRoutineWhereInput";
import { CareRoutineWhereUniqueInput } from "../../../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCareRoutineArgs {
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
}
