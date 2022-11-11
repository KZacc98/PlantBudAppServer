import * as TypeGraphQL from "type-graphql";
import { CareRoutine } from "../../../models/CareRoutine";
import { Plant } from "../../../models/Plant";
import { RoutineStep } from "../../../models/RoutineStep";
import { CareRoutineRoutineStepsArgs } from "./args/CareRoutineRoutineStepsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class CareRoutineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [RoutineStep], {
    nullable: false
  })
  async routineSteps(@TypeGraphQL.Root() careRoutine: CareRoutine, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CareRoutineRoutineStepsArgs): Promise<RoutineStep[]> {
    return getPrismaFromContext(ctx).careRoutine.findUnique({
      where: {
        id: careRoutine.id,
      },
    }).routineSteps(args);
  }

  @TypeGraphQL.FieldResolver(_type => Plant, {
    nullable: false
  })
  async plant(@TypeGraphQL.Root() careRoutine: CareRoutine, @TypeGraphQL.Ctx() ctx: any): Promise<Plant> {
    return getPrismaFromContext(ctx).careRoutine.findUnique({
      where: {
        id: careRoutine.id,
      },
    }).plant({});
  }
}
