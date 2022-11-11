import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstRoutineStepArgs } from "./args/FindFirstRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class FindFirstRoutineStepResolver {
  @TypeGraphQL.Query(_returns => RoutineStep, {
    nullable: true
  })
  async findFirstRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRoutineStepArgs): Promise<RoutineStep | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).routineStep.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
