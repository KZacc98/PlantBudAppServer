import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCommunityUsersArgs } from "./args/FindManyCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class FindManyCommunityUsersResolver {
  @TypeGraphQL.Query(_returns => [CommunityUsers], {
    nullable: false
  })
  async findManyCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCommunityUsersArgs): Promise<CommunityUsers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
