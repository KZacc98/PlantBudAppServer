import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CareRoutine } from "../models/CareRoutine";
import { PlantType } from "../models/PlantType";
import { User } from "../models/User";
import { plantPlacement } from "../enums/plantPlacement";
import { plantState } from "../enums/plantState";

@TypeGraphQL.ObjectType("Plant", {
  isAbstract: true
})
export class Plant {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantTypeId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantImage?: string | null;

  careRoutine?: CareRoutine | null;

  @TypeGraphQL.Field(_type => plantState, {
    nullable: false
  })
  plantState!: "thriving" | "good" | "needsAttention" | "thirsty" | "forgotten" | "dead" | "default";

  @TypeGraphQL.Field(_type => plantPlacement, {
    nullable: false
  })
  plantPlacement!: "inside" | "outside" | "default";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  plantType?: PlantType;
}
