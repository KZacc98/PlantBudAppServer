import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.ObjectType("CareRoutineMaxAggregate", {
  isAbstract: true
})
export class CareRoutineMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  plantId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCompleted!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isShared!: boolean | null;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  flag!: "offfensive" | "useful" | "best" | "default" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
