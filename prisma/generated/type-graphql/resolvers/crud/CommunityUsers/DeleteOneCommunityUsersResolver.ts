import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCommunityUsersArgs } from "./args/DeleteOneCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class DeleteOneCommunityUsersResolver {
  @TypeGraphQL.Mutation(_returns => CommunityUsers, {
    nullable: true
  })
  async deleteOneCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCommunityUsersArgs): Promise<CommunityUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
