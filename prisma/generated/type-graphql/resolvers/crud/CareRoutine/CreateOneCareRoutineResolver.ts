import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCareRoutineArgs } from "./args/CreateOneCareRoutineArgs";
import { CareRoutine } from "../../../models/CareRoutine";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CareRoutine)
export class CreateOneCareRoutineResolver {
  @TypeGraphQL.Mutation(_returns => CareRoutine, {
    nullable: false
  })
  async createOneCareRoutine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCareRoutineArgs): Promise<CareRoutine> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).careRoutine.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
