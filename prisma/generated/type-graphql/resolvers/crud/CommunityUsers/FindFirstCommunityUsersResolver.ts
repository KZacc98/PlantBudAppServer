import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCommunityUsersArgs } from "./args/FindFirstCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class FindFirstCommunityUsersResolver {
  @TypeGraphQL.Query(_returns => CommunityUsers, {
    nullable: true
  })
  async findFirstCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCommunityUsersArgs): Promise<CommunityUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
