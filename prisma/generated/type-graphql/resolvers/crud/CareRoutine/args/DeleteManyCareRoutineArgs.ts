import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineWhereInput } from "../../../inputs/CareRoutineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  where?: CareRoutineWhereInput | undefined;
}
