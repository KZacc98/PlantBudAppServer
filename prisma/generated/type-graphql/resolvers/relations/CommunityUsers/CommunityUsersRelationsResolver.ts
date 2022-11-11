import * as TypeGraphQL from "type-graphql";
import { Community } from "../../../models/Community";
import { CommunityUsers } from "../../../models/CommunityUsers";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommunityUsers)
export class CommunityUsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() communityUsers: CommunityUsers, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).communityUsers.findUnique({
      where: {
        userId_communityId: {
          userId: communityUsers.userId,
          communityId: communityUsers.communityId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Community, {
    nullable: false
  })
  async community(@TypeGraphQL.Root() communityUsers: CommunityUsers, @TypeGraphQL.Ctx() ctx: any): Promise<Community> {
    return getPrismaFromContext(ctx).communityUsers.findUnique({
      where: {
        userId_communityId: {
          userId: communityUsers.userId,
          communityId: communityUsers.communityId,
        },
      },
    }).community({});
  }
}
