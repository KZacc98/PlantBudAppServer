import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommunityUsersArgs } from "./args/AggregateCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { AggregateCommunityUsers } from "../../outputs/AggregateCommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class AggregateCommunityUsersResolver {
  @TypeGraphQL.Query(_returns => AggregateCommunityUsers, {
    nullable: false
  })
  async aggregateCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommunityUsersArgs): Promise<AggregateCommunityUsers> {
    return getPrismaFromContext(ctx).communityUsers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
