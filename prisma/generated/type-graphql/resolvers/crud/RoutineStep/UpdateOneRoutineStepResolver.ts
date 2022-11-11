import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRoutineStepArgs } from "./args/UpdateOneRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class UpdateOneRoutineStepResolver {
  @TypeGraphQL.Mutation(_returns => RoutineStep, {
    nullable: true
  })
  async updateOneRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneRoutineStepArgs): Promise<RoutineStep | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).routineStep.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
