import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Community } from "../models/Community";
import { User } from "../models/User";
import { userContentFlag } from "../enums/userContentFlag";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postBody?: string | null;

  comments?: Comment[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: false
  })
  flag!: "offfensive" | "useful" | "best" | "default";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAnnouncement!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  user?: User;

  community?: Community;

  @TypeGraphQL.Field(_type => PostCount, {
    nullable: true
  })
  _count?: PostCount | null;
}
