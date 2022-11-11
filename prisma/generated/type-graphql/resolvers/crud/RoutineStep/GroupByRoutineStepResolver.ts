import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByRoutineStepArgs } from "./args/GroupByRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { RoutineStepGroupBy } from "../../outputs/RoutineStepGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class GroupByRoutineStepResolver {
  @TypeGraphQL.Query(_returns => [RoutineStepGroupBy], {
    nullable: false
  })
  async groupByRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRoutineStepArgs): Promise<RoutineStepGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).routineStep.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
