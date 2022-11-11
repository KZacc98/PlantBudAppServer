import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCommunityUsersArgs } from "./args/GroupByCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { CommunityUsersGroupBy } from "../../outputs/CommunityUsersGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class GroupByCommunityUsersResolver {
  @TypeGraphQL.Query(_returns => [CommunityUsersGroupBy], {
    nullable: false
  })
  async groupByCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCommunityUsersArgs): Promise<CommunityUsersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
