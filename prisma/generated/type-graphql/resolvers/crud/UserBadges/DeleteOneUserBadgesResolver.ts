import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserBadgesArgs } from "./args/DeleteOneUserBadgesArgs";
import { UserBadges } from "../../../models/UserBadges";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserBadges)
export class DeleteOneUserBadgesResolver {
  @TypeGraphQL.Mutation(_returns => UserBadges, {
    nullable: true
  })
  async deleteOneUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserBadgesArgs): Promise<UserBadges | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
