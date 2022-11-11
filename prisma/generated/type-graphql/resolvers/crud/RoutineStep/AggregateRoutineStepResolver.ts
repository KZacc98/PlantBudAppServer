import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoutineStepArgs } from "./args/AggregateRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { AggregateRoutineStep } from "../../outputs/AggregateRoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class AggregateRoutineStepResolver {
  @TypeGraphQL.Query(_returns => AggregateRoutineStep, {
    nullable: false
  })
  async aggregateRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRoutineStepArgs): Promise<AggregateRoutineStep> {
    return getPrismaFromContext(ctx).routineStep.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
