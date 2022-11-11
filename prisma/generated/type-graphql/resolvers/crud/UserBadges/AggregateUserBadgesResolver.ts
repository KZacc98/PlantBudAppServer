import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserBadgesArgs } from "./args/AggregateUserBadgesArgs";
import { UserBadges } from "../../../models/UserBadges";
import { AggregateUserBadges } from "../../outputs/AggregateUserBadges";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserBadges)
export class AggregateUserBadgesResolver {
  @TypeGraphQL.Query(_returns => AggregateUserBadges, {
    nullable: false
  })
  async aggregateUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserBadgesArgs): Promise<AggregateUserBadges> {
    return getPrismaFromContext(ctx).userBadges.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
