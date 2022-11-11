import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCareRoutineArgs } from "./args/AggregateCareRoutineArgs";
import { CareRoutine } from "../../../models/CareRoutine";
import { AggregateCareRoutine } from "../../outputs/AggregateCareRoutine";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class AggregateCareRoutineResolver {
  @TypeGraphQL.Query(_returns => AggregateCareRoutine, {
    nullable: false
  })
  async aggregateCareRoutine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCareRoutineArgs): Promise<AggregateCareRoutine> {
    return getPrismaFromContext(ctx).careRoutine.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
