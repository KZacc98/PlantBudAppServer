import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareRoutineCreateManyInput } from "../../../inputs/CareRoutineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCareRoutineArgs {
  @TypeGraphQL.Field(_type => [CareRoutineCreateManyInput], {
    nullable: false
  })
  data!: CareRoutineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
