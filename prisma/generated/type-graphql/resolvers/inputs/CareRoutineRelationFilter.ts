import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareRoutineWhereInput } from "../inputs/CareRoutineWhereInput";

@TypeGraphQL.InputType("CareRoutineRelationFilter", {
  isAbstract: true
})
export class CareRoutineRelationFilter {
  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  is?: CareRoutineWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareRoutineWhereInput, {
    nullable: true
  })
  isNot?: CareRoutineWhereInput | undefined;
}
