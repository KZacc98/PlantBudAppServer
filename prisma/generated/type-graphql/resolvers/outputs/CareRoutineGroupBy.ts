import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineCountAggregate } from "../outputs/CareRoutineCountAggregate";
import { CareRoutineMaxAggregate } from "../outputs/CareRoutineMaxAggregate";
import { CareRoutineMinAggregate } from "../outputs/CareRoutineMinAggregate";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.ObjectType("CareRoutineGroupBy", {
  isAbstract: true
})
export class CareRoutineGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  plantId!: string;

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
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => CareRoutineCountAggregate, {
    nullable: true
  })
  _count!: CareRoutineCountAggregate | null;

  @TypeGraphQL.Field(_type => CareRoutineMinAggregate, {
    nullable: true
  })
  _min!: CareRoutineMinAggregate | null;

  @TypeGraphQL.Field(_type => CareRoutineMaxAggregate, {
    nullable: true
  })
  _max!: CareRoutineMaxAggregate | null;
}
