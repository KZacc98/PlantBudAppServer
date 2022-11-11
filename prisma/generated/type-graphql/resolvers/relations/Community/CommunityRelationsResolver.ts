import * as TypeGraphQL from "type-graphql";
import { Community } from "../../../models/Community";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { Post } from "../../../models/Post";
import { CommunityPostsArgs } from "./args/CommunityPostsArgs";
import { CommunityUsersArgs } from "./args/CommunityUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Community)
export class CommunityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() community: Community, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommunityPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).community.findUnique({
      where: {
        id: community.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CommunityUsers], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() community: Community, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommunityUsersArgs): Promise<CommunityUsers[]> {
    return getPrismaFromContext(ctx).community.findUnique({
      where: {
        id: community.id,
      },
    }).users(args);
  }
}
