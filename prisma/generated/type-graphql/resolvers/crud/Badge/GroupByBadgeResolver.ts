import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBadgeArgs } from "./args/GroupByBadgeArgs";
import { Badge } from "../../../models/Badge";
import { BadgeGroupBy } from "../../outputs/BadgeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Badge)
export class GroupByBadgeResolver {
  @TypeGraphQL.Query(_returns => [BadgeGroupBy], {
    nullable: false
  })
  async groupByBadge(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBadgeArgs): Promise<BadgeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).badge.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
