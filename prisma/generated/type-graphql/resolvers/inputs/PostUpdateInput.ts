import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostNestedInput } from "../inputs/CommentUpdateManyWithoutPostNestedInput";
import { CommunityUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/CommunityUpdateOneRequiredWithoutPostsNestedInput";
import { EnumuserContentFlagFieldUpdateOperationsInput } from "../inputs/EnumuserContentFlagFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostsNestedInput";

@TypeGraphQL.InputType("PostUpdateInput", {
  isAbstract: true
})
export class PostUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  postBody?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  points?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumuserContentFlagFieldUpdateOperationsInput, {
    nullable: true
  })
  flag?: EnumuserContentFlagFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAnnouncement?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  community?: CommunityUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
