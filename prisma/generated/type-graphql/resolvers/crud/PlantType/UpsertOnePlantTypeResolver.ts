import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePlantTypeArgs } from "./args/UpsertOnePlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class UpsertOnePlantTypeResolver {
  @TypeGraphQL.Mutation(_returns => PlantType, {
    nullable: false
  })
  async upsertOnePlantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePlantTypeArgs): Promise<PlantType> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plantType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
