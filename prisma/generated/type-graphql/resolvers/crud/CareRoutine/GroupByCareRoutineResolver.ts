import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCareRoutineArgs } from "./args/GroupByCareRoutineArgs";
import { CareRoutine } from "../../../models/CareRoutine";
import { CareRoutineGroupBy } from "../../outputs/CareRoutineGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class GroupByCareRoutineResolver {
  @TypeGraphQL.Query(_returns => [CareRoutineGroupBy], {
    nullable: false
  })
  async groupByCareRoutine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCareRoutineArgs): Promise<CareRoutineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).careRoutine.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
