import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineWhereUniqueInput } from "../../../inputs/CareRoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineWhereUniqueInput, {
    nullable: false
  })
  where!: CareRoutineWhereUniqueInput;
}
