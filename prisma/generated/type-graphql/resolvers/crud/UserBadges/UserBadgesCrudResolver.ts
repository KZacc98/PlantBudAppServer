import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserBadgesArgs } from "./args/AggregateUserBadgesArgs";
import { CreateManyUserBadgesArgs } from "./args/CreateManyUserBadgesArgs";
import { CreateOneUserBadgesArgs } from "./args/CreateOneUserBadgesArgs";
import { DeleteManyUserBadgesArgs } from "./args/DeleteManyUserBadgesArgs";
import { DeleteOneUserBadgesArgs } from "./args/DeleteOneUserBadgesArgs";
import { FindFirstUserBadgesArgs } from "./args/FindFirstUserBadgesArgs";
import { FindManyUserBadgesArgs } from "./args/FindManyUserBadgesArgs";
import { FindUniqueUserBadgesArgs } from "./args/FindUniqueUserBadgesArgs";
import { GroupByUserBadgesArgs } from "./args/GroupByUserBadgesArgs";
import { UpdateManyUserBadgesArgs } from "./args/UpdateManyUserBadgesArgs";
import { UpdateOneUserBadgesArgs } from "./args/UpdateOneUserBadgesArgs";
import { UpsertOneUserBadgesArgs } from "./args/UpsertOneUserBadgesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserBadges } from "../../../models/UserBadges";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserBadges } from "../../outputs/AggregateUserBadges";
import { UserBadgesGroupBy } from "../../outputs/UserBadgesGroupBy";

@TypeGraphQL.Resolver(_of => UserBadges)
export class UserBadgesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserBadges, {
    nullable: false
  })
  async aggregateUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserBadgesArgs): Promise<AggregateUserBadges> {
    return getPrismaFromContext(ctx).userBadges.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserBadgesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserBadges, {
    nullable: false
  })
  async createOneUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserBadgesArgs): Promise<UserBadges> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserBadgesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserBadges, {
    nullable: true
  })
  async deleteOneUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserBadgesArgs): Promise<UserBadges | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserBadges, {
    nullable: true
  })
  async findFirstUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserBadgesArgs): Promise<UserBadges | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserBadges], {
    nullable: false
  })
  async findManyUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserBadgesArgs): Promise<UserBadges[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserBadges, {
    nullable: true
  })
  async findUniqueUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserBadgesArgs): Promise<UserBadges | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserBadgesGroupBy], {
    nullable: false
  })
  async groupByUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserBadgesArgs): Promise<UserBadgesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserBadgesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserBadges, {
    nullable: true
  })
  async updateOneUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserBadgesArgs): Promise<UserBadges | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserBadges, {
    nullable: false
  })
  async upsertOneUserBadges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserBadgesArgs): Promise<UserBadges> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userBadges.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
