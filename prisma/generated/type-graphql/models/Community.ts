import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CommunityUsers } from "../models/CommunityUsers";
import { Post } from "../models/Post";
import { CommunityCount } from "../resolvers/outputs/CommunityCount";

@TypeGraphQL.ObjectType("Community", {
  isAbstract: true
})
export class Community {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  communityName!: string;

  posts?: Post[];

  users?: CommunityUsers[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => CommunityCount, {
    nullable: true
  })
  _count?: CommunityCount | null;
}
