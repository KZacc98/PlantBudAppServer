import * as TypeGraphQL from "type-graphql";
import { Badge } from "../../../models/Badge";
import { UserBadges } from "../../../models/UserBadges";
import { BadgeUsersArgs } from "./args/BadgeUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Badge)
export class BadgeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UserBadges], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() badge: Badge, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BadgeUsersArgs): Promise<UserBadges[]> {
    return getPrismaFromContext(ctx).badge.findUnique({
      where: {
        id: badge.id,
      },
    }).users(args);
  }
}
