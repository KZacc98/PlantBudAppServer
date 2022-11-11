import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineCreateInput } from "../../../inputs/CareRoutineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineCreateInput, {
    nullable: false
  })
  data!: CareRoutineCreateInput;
}
