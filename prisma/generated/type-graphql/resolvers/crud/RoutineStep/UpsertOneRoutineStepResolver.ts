import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRoutineStepArgs } from "./args/UpsertOneRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class UpsertOneRoutineStepResolver {
  @TypeGraphQL.Mutation(_returns => RoutineStep, {
    nullable: false
  })
  async upsertOneRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneRoutineStepArgs): Promise<RoutineStep> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).routineStep.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
