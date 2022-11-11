import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.InputType("PostCreateManyCommunityInput", {
  isAbstract: true
})
export class PostCreateManyCommunityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
}
