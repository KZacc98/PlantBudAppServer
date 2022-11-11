import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BadgeUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/BadgeUpdateOneRequiredWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserBadgesUpdateWithoutUserInput", {
  isAbstract: true
})
export class UserBadgesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => BadgeUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
