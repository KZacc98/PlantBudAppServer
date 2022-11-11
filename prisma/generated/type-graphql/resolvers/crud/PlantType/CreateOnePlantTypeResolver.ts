import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOnePlantTypeArgs } from "./args/CreateOnePlantTypeArgs";
import { PlantType } from "../../../models/PlantType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class CreateOnePlantTypeResolver {
  @TypeGraphQL.Mutation(_returns => PlantType, {
    nullable: false
  })
  async createOnePlantType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePlantTypeArgs): Promise<PlantType> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plantType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
