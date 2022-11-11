import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommunityUsersArgs } from "./args/UpdateOneCommunityUsersArgs";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class UpdateOneCommunityUsersResolver {
  @TypeGraphQL.Mutation(_returns => CommunityUsers, {
    nullable: true
  })
  async updateOneCommunityUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCommunityUsersArgs): Promise<CommunityUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).communityUsers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
