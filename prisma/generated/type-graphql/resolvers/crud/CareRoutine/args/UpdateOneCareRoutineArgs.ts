import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineUpdateInput } from "../../../inputs/CareRoutineUpdateInput";
import { CareRoutineWhereUniqueInput } from "../../../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineUpdateInput, {
    nullable: false
  })
  data!: CareRoutineUpdateInput;

  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: false
  })
  where!: CareRoutineWhereUniqueInput;
}
