import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePlantTypeArgs } from "./args/DeleteOnePlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class DeleteOnePlantTypeResolver {
  @TypeGraphQL.Mutation(_returns => PlantType, {
    nullable: true
  })
  async deleteOnePlantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePlantTypeArgs): Promise<PlantType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plantType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
