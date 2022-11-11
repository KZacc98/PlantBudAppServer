import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/CommunityUpdateOneRequiredWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CommunityUsersUpdateWithoutUserInput", {
  isAbstract: true
})
export class CommunityUsersUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => CommunityUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  community?: CommunityUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
