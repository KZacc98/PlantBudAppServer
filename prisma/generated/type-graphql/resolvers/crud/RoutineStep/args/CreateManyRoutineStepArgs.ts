import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoutineStepCreateManyInput } from "../../../inputs/RoutineStepCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRoutineStepArgs {
  @TypeGraphQL.Field(_type => [RoutineStepCreateManyInput], {
    nullable: false
  })
  data!: RoutineStepCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
