import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Plant } from "../models/Plant";
import { RoutineStep } from "../models/RoutineStep";
import { userContentFlag } from "../enums/userContentFlag";
import { CareRoutineCount } from "../resolvers/outputs/CareRoutineCount";

@TypeGraphQL.ObjectType("CareRoutine", {
  isAbstract: true
})
export class CareRoutine {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantId!: string;

  routineSteps?: RoutineStep[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCompleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isShared!: boolean;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: false
  })
  flag!: "offfensive" | "useful" | "best" | "default";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  plant?: Plant;

  @TypeGraphQL.Field(_type => CareRoutineCount, {
    nullable: true
  })
  _count?: CareRoutineCount | null;
}
