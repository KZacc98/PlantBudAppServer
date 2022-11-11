import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommunityCreateNestedOneWithoutPostsInput } from "../inputs/CommunityCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("PostCreateWithoutCommentsInput", {
  isAbstract: true
})
export class PostCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postBody?: string | undefined;

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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAnnouncement?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => CommunityCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  community!: CommunityCreateNestedOneWithoutPostsInput;
}
