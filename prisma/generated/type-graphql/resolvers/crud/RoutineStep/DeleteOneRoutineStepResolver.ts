import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneRoutineStepArgs } from "./args/DeleteOneRoutineStepArgs";
import { RoutineStep } from "../../../models/RoutineStep";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RoutineStep)
export class DeleteOneRoutineStepResolver {
  @TypeGraphQL.Mutation(_returns => RoutineStep, {
    nullable: true
  })
  async deleteOneRoutineStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneRoutineStepArgs): Promise<RoutineStep | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).routineStep.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
