import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserBadgesArgs } from "./args/GroupByUserBadgesArgs";
import { UserBadges } from "../../../models/UserBadges";
import { UserBadgesGroupBy } from "../../outputs/UserBadgesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserBadges)
export class GroupByUserBadgesResolver {
  @TypeGraphQL.Query(_returns => [UserBadgesGroupBy], {
    nullable: false
  })
  async groupByUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserBadgesArgs): Promise<UserBadgesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
