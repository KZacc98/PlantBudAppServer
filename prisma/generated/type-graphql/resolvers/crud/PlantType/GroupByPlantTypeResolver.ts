import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPlantTypeArgs } from "./args/GroupByPlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { PlantTypeGroupBy } from "../../outputs/PlantTypeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class GroupByPlantTypeResolver {
  @TypeGraphQL.Query(_returns => [PlantTypeGroupBy], {
    nullable: false
  })
  async groupByPlantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlantTypeArgs): Promise<PlantTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plantType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
