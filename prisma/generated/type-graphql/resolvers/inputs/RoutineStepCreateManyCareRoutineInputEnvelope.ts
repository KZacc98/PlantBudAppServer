import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoutineStepCreateManyCareRoutineInput } from "../inputs/RoutineStepCreateManyCareRoutineInput";

@TypeGraphQL.InputType("RoutineStepCreateManyCareRoutineInputEnvelope", {
  isAbstract: true
})
export class RoutineStepCreateManyCareRoutineInputEnvelope {
  @TypeGraphQL.Field(_type => [RoutineStepCreateManyCareRoutineInput], {
    nullable: false
  })
  data!: RoutineStepCreateManyCareRoutineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
