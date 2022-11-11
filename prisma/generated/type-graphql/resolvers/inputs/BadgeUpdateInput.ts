import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserBadgesUpdateManyWithoutBadgeNestedInput } from "../inputs/UserBadgesUpdateManyWithoutBadgeNestedInput";

@TypeGraphQL.InputType("BadgeUpdateInput", {
  isAbstract: true
})
export class BadgeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  badgeName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  points?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserBadgesUpdateManyWithoutBadgeNestedInput, {
    nullable: true
  })
  users?: UserBadgesUpdateManyWithoutBadgeNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
