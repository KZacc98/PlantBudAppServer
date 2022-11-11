import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBadgeArgs } from "./args/AggregateBadgeArgs";
import { Badge } from "../../../models/Badge";
import { AggregateBadge } from "../../outputs/AggregateBadge";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Badge)
export class AggregateBadgeResolver {
  @TypeGraphQL.Query(_returns => AggregateBadge, {
    nullable: false
  })
  async aggregateBadge(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBadgeArgs): Promise<AggregateBadge> {
    return getPrismaFromContext(ctx).badge.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
