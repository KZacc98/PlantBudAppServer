import * as TypeGraphQL from "type-graphql";
import { CareRoutine } from "../../../models/CareRoutine";
import { RoutineStep } from "../../../models/RoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class RoutineStepRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CareRoutine, {
    nullable: false
  })
  async careRoutine(@TypeGraphQL.Root() routineStep: RoutineStep, @TypeGraphQL.Ctx() ctx: any): Promise<CareRoutine> {
    return getPrismaFromContext(ctx).routineStep.findUnique({
      where: {
        id: routineStep.id,
      },
    }).careRoutine({});
  }
}
