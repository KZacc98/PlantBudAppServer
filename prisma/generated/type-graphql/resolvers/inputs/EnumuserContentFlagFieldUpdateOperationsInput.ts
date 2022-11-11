import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("EnumuserContentFlagFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumuserContentFlagFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  set?: "offfensive" | "useful" | "best" | "default" | undefined;
}
