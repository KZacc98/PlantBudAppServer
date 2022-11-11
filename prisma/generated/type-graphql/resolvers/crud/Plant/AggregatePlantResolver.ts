import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlantArgs } from "./args/AggregatePlantArgs";
import { Plant } from "../../../models/Plant";
import { AggregatePlant } from "../../outputs/AggregatePlant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plant)
export class AggregatePlantResolver {
  @TypeGraphQL.Query(_returns => AggregatePlant, {
    nullable: false
  })
  async aggregatePlant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlantArgs): Promise<AggregatePlant> {
    return getPrismaFromContext(ctx).plant.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
