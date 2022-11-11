import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userType } from "../../enums/userType";

@TypeGraphQL.InputType("EnumuserTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumuserTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => userType, {
    nullable: true
  })
  set?: "user" | "admin" | undefined;
}
