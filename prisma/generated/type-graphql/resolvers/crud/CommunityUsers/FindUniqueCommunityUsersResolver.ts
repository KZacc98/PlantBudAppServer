import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommunityUsersArgs } from "./args/FindUniqueCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class FindUniqueCommunityUsersResolver {
  @TypeGraphQL.Query(_returns => CommunityUsers, {
    nullable: true
  })
  async findUniqueCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCommunityUsersArgs): Promise<CommunityUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
