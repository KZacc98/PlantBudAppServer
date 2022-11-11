import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlantTypeArgs } from "./args/AggregatePlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { AggregatePlantType } from "../../outputs/AggregatePlantType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class AggregatePlantTypeResolver {
  @TypeGraphQL.Query(_returns => AggregatePlantType, {
    nullable: false
  })
  async aggregatePlantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlantTypeArgs): Promise<AggregatePlantType> {
    return getPrismaFromContext(ctx).plantType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
