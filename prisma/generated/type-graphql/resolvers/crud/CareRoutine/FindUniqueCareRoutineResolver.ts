import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCareRoutineArgs } from "./args/FindUniqueCareRoutineArgs";
import { CareRoutine } from "../../../models/CareRoutine";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class FindUniqueCareRoutineResolver {
  @TypeGraphQL.Query(_returns => CareRoutine, {
    nullable: true
  })
  async careRoutine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCareRoutineArgs): Promise<CareRoutine | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).careRoutine.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
