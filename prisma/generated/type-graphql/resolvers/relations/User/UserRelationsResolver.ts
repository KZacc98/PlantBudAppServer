import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { Plant } from "../../../models/Plant";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserBadges } from "../../../models/UserBadges";
import { UserToken } from "../../../models/UserToken";
import { UserBadgesArgs } from "./args/UserBadgesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserCommunitiesArgs } from "./args/UserCommunitiesArgs";
import { UserPlantsArgs } from "./args/UserPlantsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserTokenArgs } from "./args/UserTokenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Plant], {
    nullable: false
  })
  async plants(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPlantsArgs): Promise<Plant[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).plants(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserBadges], {
    nullable: false
  })
  async badges(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBadgesArgs): Promise<UserBadges[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).badges(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CommunityUsers], {
    nullable: false
  })
  async communities(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommunitiesArgs): Promise<CommunityUsers[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).communities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserToken], {
    nullable: false
  })
  async token(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokenArgs): Promise<UserToken[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).token(args);
  }
}
