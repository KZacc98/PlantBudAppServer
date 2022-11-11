import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCareRoutineArgs } from "./args/FindFirstCareRoutineArgs";
import { CareRoutine } from "../../../models/CareRoutine";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class FindFirstCareRoutineResolver {
  @TypeGraphQL.Query(_returns => CareRoutine, {
    nullable: true
  })
  async findFirstCareRoutine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCareRoutineArgs): Promise<CareRoutine | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).careRoutine.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
