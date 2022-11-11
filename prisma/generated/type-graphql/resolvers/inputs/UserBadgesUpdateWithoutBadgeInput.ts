import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBadgesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBadgesNestedInput";

@TypeGraphQL.InputType("UserBadgesUpdateWithoutBadgeInput", {
  isAbstract: true
})
export class UserBadgesUpdateWithoutBadgeInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBadgesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBadgesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
