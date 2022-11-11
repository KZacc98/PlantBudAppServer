import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineCreateInput } from "../../../inputs/CareRoutineCreateInput";
import { CareRoutineUpdateInput } from "../../../inputs/CareRoutineUpdateInput";
import { CareRoutineWhereUniqueInput } from "../../../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: false
  })
  where!: CareRoutineWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareRoutineCreateInput, {
    nullable: false
  })
  create!: CareRoutineCreateInput;

  @TypeGraphQL.Field(_type => CareRoutineUpdateInput, {
    nullable: false
  })
  update!: CareRoutineUpdateInput;
}
