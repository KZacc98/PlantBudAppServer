import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniquePlantTypeArgs } from "./args/FindUniquePlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class FindUniquePlantTypeResolver {
  @TypeGraphQL.Query(_returns => PlantType, {
    nullable: true
  })
  async plantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlantTypeArgs): Promise<PlantType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plantType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
