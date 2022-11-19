import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { CommunityUsersUpdateManyWithoutUserNestedInput } from "../inputs/CommunityUsersUpdateManyWithoutUserNestedInput";
import { EnumgenderFieldUpdateOperationsInput } from "../inputs/EnumgenderFieldUpdateOperationsInput";
import { EnumuserTypeFieldUpdateOperationsInput } from "../inputs/EnumuserTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PlantUpdateManyWithoutUserNestedInput } from "../inputs/PlantUpdateManyWithoutUserNestedInput";
import { PostUpdateManyWithoutUserNestedInput } from "../inputs/PostUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTokenUpdateManyWithoutUserNestedInput } from "../inputs/UserTokenUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutBadgesInput", {
  isAbstract: true
})
export class UserUpdateWithoutBadgesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  userName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phoneNumber?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: EnumgenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlantUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  plants?: PlantUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  communities?: CommunityUsersUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserTokenUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  token?: UserTokenUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  points?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumuserTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  userType?: EnumuserTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
