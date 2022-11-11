import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Community } from "../../../models/Community";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Community, {
    nullable: false
  })
  async community(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Community> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).community({});
  }
}
