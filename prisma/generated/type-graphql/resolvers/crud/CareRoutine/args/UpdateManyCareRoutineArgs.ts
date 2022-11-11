import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineUpdateManyMutationInput } from "../../../inputs/CareRoutineUpdateManyMutationInput";
import { CareRoutineWhereInput } from "../../../inputs/CareRoutineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCareRoutineArgs {
  @TypeGraphQL.Field(_type => CareRoutineUpdateManyMutationInput, {
    nullable: false
  })
  data!: CareRoutineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  where?: CareRoutineWhereInput | undefined;
}
