import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/CommunityUpdateOneRequiredWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommunitiesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommunitiesNestedInput";

@TypeGraphQL.InputType("CommunityUsersUpdateInput", {
  isAbstract: true
})
export class CommunityUsersUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommunitiesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommunitiesNestedInput | undefined;

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
