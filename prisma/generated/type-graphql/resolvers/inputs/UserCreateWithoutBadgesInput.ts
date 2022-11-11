import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { CommunityUsersCreateNestedManyWithoutUserInput } from "../inputs/CommunityUsersCreateNestedManyWithoutUserInput";
import { PlantCreateNestedManyWithoutUserInput } from "../inputs/PlantCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { gender } from "../../enums/gender";
import { userType } from "../../enums/userType";

@TypeGraphQL.InputType("UserCreateWithoutBadgesInput", {
  isAbstract: true
})
export class UserCreateWithoutBadgesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender?: "male" | "female" | "other" | "preferNotToTell" | undefined;

  @TypeGraphQL.Field(_type => PlantCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  plants?: PlantCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommunityUsersCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  communities?: CommunityUsersCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  points?: number | undefined;

  @TypeGraphQL.Field(_type => userType, {
    nullable: true
  })
  userType?: "user" | "admin" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
