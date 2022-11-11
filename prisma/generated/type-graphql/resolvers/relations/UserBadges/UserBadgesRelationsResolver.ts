import * as TypeGraphQL from "type-graphql";
import { Badge } from "../../../models/Badge";
import { User } from "../../../models/User";
import { UserBadges } from "../../../models/UserBadges";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserBadges)
export class UserBadgesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userBadges: UserBadges, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userBadges.findUnique({
      where: {
        userId_badgeId: {
          userId: userBadges.userId,
          badgeId: userBadges.badgeId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Badge, {
    nullable: false
  })
  async badge(@TypeGraphQL.Root() userBadges: UserBadges, @TypeGraphQL.Ctx() ctx: any): Promise<Badge> {
    return getPrismaFromContext(ctx).userBadges.findUnique({
      where: {
        userId_badgeId: {
          userId: userBadges.userId,
          badgeId: userBadges.badgeId,
        },
      },
    }).badge({});
  }
}
