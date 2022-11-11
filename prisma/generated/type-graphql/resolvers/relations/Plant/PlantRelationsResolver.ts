import * as TypeGraphQL from "type-graphql";
import { CareRoutine } from "../../../models/CareRoutine";
import { Plant } from "../../../models/Plant";
import { PlantType } from "../../../models/PlantType";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plant)
export class PlantRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CareRoutine, {
    nullable: true
  })
  async careRoutine(@TypeGraphQL.Root() plant: Plant, @TypeGraphQL.Ctx() ctx: any): Promise<CareRoutine | null> {
    return getPrismaFromContext(ctx).plant.findUnique({
      where: {
        id: plant.id,
      },
    }).careRoutine({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() plant: Plant, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).plant.findUnique({
      where: {
        id: plant.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => PlantType, {
    nullable: false
  })
  async plantType(@TypeGraphQL.Root() plant: Plant, @TypeGraphQL.Ctx() ctx: any): Promise<PlantType> {
    return getPrismaFromContext(ctx).plant.findUnique({
      where: {
        id: plant.id,
      },
    }).plantType({});
  }
}
