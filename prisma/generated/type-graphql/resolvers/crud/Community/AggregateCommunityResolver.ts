import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommunityArgs } from "./args/AggregateCommunityArgs";
import { Community } from "../../../models/Community";
import { AggregateCommunity } from "../../outputs/AggregateCommunity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Community)
export class AggregateCommunityResolver {
  @TypeGraphQL.Query(_returns => AggregateCommunity, {
    nullable: false
  })
  async aggregateCommunity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommunityArgs): Promise<AggregateCommunity> {
    return getPrismaFromContext(ctx).community.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
