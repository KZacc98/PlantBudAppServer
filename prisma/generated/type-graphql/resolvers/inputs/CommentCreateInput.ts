import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentBody!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  points?: number | undefined;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  flag?: "offfensive" | "useful" | "best" | "default" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCommentsInput;
}
