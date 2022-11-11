import * as TypeGraphQL from "type-graphql";
import { Plant } from "../../../models/Plant";
import { PlantType } from "../../../models/PlantType";
import { PlantTypePlantsArgs } from "./args/PlantTypePlantsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlantType)
export class PlantTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Plant], {
    nullable: false
  })
  async plants(@TypeGraphQL.Root() plantType: PlantType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlantTypePlantsArgs): Promise<Plant[]> {
    return getPrismaFromContext(ctx).plantType.findUnique({
      where: {
        id: plantType.id,
      },
    }).plants(args);
  }
}
